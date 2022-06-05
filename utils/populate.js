const axios = require("axios")
const { loadEnvConfig } = require("@next/env")
const fs = require("fs/promises")

const WANTED_LEAGUES = ["PL", "ELC", "FL1", "BL1", "SA", "PD"]

const downloadLeagueData = async (league) => {
  const url = `https://api.football-data.org/v4/competitions/${league}/standings`

  const fromApi = await axios.get(url, {
    headers: { "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY }
  })
  data = fromApi.data

  await fs.writeFile(`./data/${league}.json`, JSON.stringify(data, null, 2))
}

const main = async () => {
  loadEnvConfig("./", true)
  await fs.mkdir("data", { recursive: true })

  for (const league of WANTED_LEAGUES) {
    await downloadLeagueData(league)
  }
}

main()
