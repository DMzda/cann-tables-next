import Head from "next/head"
import Image from "next/image"
import { getFootballData } from "../utils/football-data"

export default function Home({ leagues }) {
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

      <main className="flex flex-row justify-evenly">
        <div>
          <ul>
            {leagues.map((league) => (
              <li key={league.code}>
                <Image
                  src={league.areaFlag}
                  alt={`${league.areaName} Flag`}
                  width={30}
                  height={15}
                />
                {league.name}
              </li>
            ))}
          </ul>
        </div>
        <table>
          <thead>
            <tr>
              <th className="p-1">Points</th>
              <th className="p-1">Team</th>
            </tr>
          </thead>
          <tbody>
            {leagues[0].standings.map((point) => (
              <tr key={Object.keys(point)[0]}>
                <td>{Object.keys(point)[0]}</td>
                <td>
                  <ol>
                    {Object.values(point)[0].map((team) => (
                      <li key={team.team.id}>
                        {team.team.name}|{team.won}|{team.draw}|{team.lost}|
                        {team.goalDifference}
                      </li>
                    ))}
                  </ol>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
