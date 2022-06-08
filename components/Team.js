const Team = ({ team }) => {
  return (
    <li className="m-1 whitespace-nowrap text-center">
      <span className="inline-block rounded-l-md border-y-2 border-l-2 border-black py-0.5 px-2">
        {team.position}
      </span>
      <span className="hidden md:inline-block border-y-2 border-l-2 border-black py-0.5 px-2">
        {team.team.name}
      </span>
      <span className="md:hidden inline-block border-y-2 border-l-2 border-black py-0.5 px-2">
        {team.team.shortName}
      </span>
      <span className="inline-block border-y-2 border-l-2 border-black bg-green-200 py-0.5 px-2">
        {team.won}
      </span>
      <span className="inline-block border-y-2 border-l-2 border-black bg-yellow-100 py-0.5 px-2">
        {team.draw}
      </span>
      <span className="inline-block border-y-2 border-l-2 border-black bg-red-200 py-0.5 px-2">
        {team.lost}
      </span>
      <span className="inline-block rounded-r-md border-2 border-black py-0.5 px-2">
        {team.goalDifference > 0 ? "+" : ""}
        {team.goalDifference}
      </span>
    </li>
  )
}

export default Team
