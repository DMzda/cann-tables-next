import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { getFootballData } from "../utils/football-data"
import Team from "../components/Team"
import LeagueSelector from "../components/LeagueSelector"

export default function Home({ leagues }) {
  const [selectedLeague, setSelectedLeague] = useState("PL")

  const handleSelect = (league) => {
    console.log(league)
    setSelectedLeague(league)
  }

  return (
    <div className="container mx-auto px-6">
      <Head>
        <title>Cann tables</title>
        <meta
          name="description"
          content="Football tables displayed in a cann format"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-6 text-center">
        <h1 className="text-3xl font-bold">Cann Football Tables</h1>
        <p>by dmzda</p>
      </header>

      <main className="flex flex-col md:flex-row md:justify-center">
        <div className="mb-2 mr-2">
          <LeagueSelector
            leagues={leagues}
            selectedLeague={selectedLeague}
            setSelectedLeague={setSelectedLeague}
          />
        </div>
        <div className="rounded-md border-2 border-slate-400">
          <table className="border-collapse border-0 p-2">
            <thead>
              <tr>
                <th className="rounded-md border-r p-1">Points</th>
                <th className="rounded-md p-1">Team</th>
              </tr>
            </thead>
            <tbody>
              {leagues
                .filter((league) => league.code === selectedLeague)[0]
                .standings.map((point) => (
                  <tr key={Object.keys(point)[0]}>
                    <td className="border-r border-t text-center">
                      {Object.keys(point)[0]}
                    </td>
                    <td className="border-t">
                      <ol>
                        {Object.values(point)[0].map((team) => (
                          <Team key={team.team.id} team={team} />
                        ))}
                      </ol>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const leagues = await getFootballData()

  return {
    props: { leagues }
  }
}
