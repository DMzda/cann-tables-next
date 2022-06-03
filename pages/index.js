import Head from "next/head"
import Image from "next/image"

export default function Home() {
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
            <li>
              <span className="inline-block w-8 h-4 bg-red-500 mr-1"></span>
              Premier League
            </li>
            <li>
              <span className="inline-block w-8 h-4 bg-red-500 mr-1"></span>
              Premier League
            </li>
            <li>
              <span className="inline-block w-8 h-4 bg-red-500 mr-1"></span>
              Premier League
            </li>
            <li>
              <span className="inline-block w-8 h-4 bg-red-500 mr-1"></span>
              Premier League
            </li>
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
            <tr>
              <td>93</td>
              <td>Manchester City</td>
            </tr>

            <tr>
              <td>92</td>
              <td>Liverpool</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}
