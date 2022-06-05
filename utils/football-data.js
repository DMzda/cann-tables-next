import axios from "axios"
import fs from "fs/promises"

const WANTED_LEAGUES = ["PL", "ELC", "FL1", "BL1", "SA", "PD"]

const getFootballData = async () => {
  const leagues = []

  for (const league of WANTED_LEAGUES) {
    const url = `https://api.football-data.org/v4/competitions/${league}/standings`

    let data
    if (process.env.NODE_ENV !== "production") {
      const fromFile = await fs.readFile(`./data/${league}.json`, "utf-8")
      data = JSON.parse(fromFile)
    } else {
      const fromApi = await axios.get(url, {
        headers: { "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY }
      })
      data = fromApi.data
    }

    const result = {
      code: data.competition.code,
      name: data.competition.name,
      emblem: data.competition.emblem,
      areaFlag: data.area.flag,
      areaName: data.area.name,
      standings: makeCann(
        data.standings.filter(
          (standing) =>
            standing.stage === "REGULAR_SEASON" && standing.type === "TOTAL"
        )[0].table
      )
    }

    leagues.push(result)
  }
  return leagues
}

const makeCann = (table) => {
  const points = table.map((team) => team.points)
  const maxPoints = Math.max(...points)
  const minPoints = Math.min(...points)

  const result = []
  for (let i = maxPoints; i >= minPoints; i--) {
    const teams = table.filter((team) => team.points === i)
    result.push({ [i]: teams })
  }

  return result
}

export { WANTED_LEAGUES, getFootballData }
