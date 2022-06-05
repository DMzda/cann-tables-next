const Team = ({ team }) => {
  return (
    <li className="m-1">
      <span className="border-y-2 border-l-2 border-black rounded-l-md inline-block p-1">
        {team.position}
      </span>
      <span className="border-y-2 border-l-2 border-black inline-block p-1">
        {team.team.name}
      </span>
      <span className="border-y-2 border-l-2 border-black inline-block p-1">
        {team.won}
      </span>
      <span className="border-y-2 border-l-2 border-black inline-block p-1">
        {team.draw}
      </span>
      <span className="border-y-2 border-l-2 border-black inline-block p-1">
        {team.lost}
      </span>
      <span className="border-2 border-black inline-block p-1 rounded-r-md">
        {team.goalDifference}
      </span>
    </li>
  )
}

export default Team
