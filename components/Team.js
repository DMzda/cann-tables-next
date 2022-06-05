const Team = ({ team }) => {
  return (
    <li className="m-1 text-center">
      <span className="border-y-2 border-l-2 border-black rounded-l-md inline-block py-0.5 px-2">
        {team.position}
      </span>
      <span className="border-y-2 border-l-2 border-black inline-block py-0.5 px-2">
        {team.team.shortName}
      </span>
      <span className="border-y-2 border-l-2 border-black inline-block py-0.5 px-2 bg-green-200">
        {team.won}
      </span>
      <span className="border-y-2 border-l-2 border-black inline-block py-0.5 px-2 bg-yellow-100">
        {team.draw}
      </span>
      <span className="border-y-2 border-l-2 border-black inline-block py-0.5 px-2 bg-red-200">
        {team.lost}
      </span>
      <span className="border-2 border-black inline-block py-0.5 px-2 rounded-r-md">
        {team.goalDifference > 0 ? "+" : ""}
        {team.goalDifference}
      </span>
    </li>
  )
}

export default Team
