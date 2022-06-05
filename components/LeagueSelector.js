import Image from "next/image"
import { RadioGroup } from "@headlessui/react"

const LeagueSelector = ({ leagues, selectedLeague, setSelectedLeague }) => {
  return (
    <RadioGroup value={selectedLeague} onChange={setSelectedLeague}>
      <RadioGroup.Label className="font-bold">League</RadioGroup.Label>
      {leagues.map((league) => (
        <RadioGroup.Option value={league.code} key={league.code}>
          {({ checked }) => (
            <>
              <Image
                src={league.areaFlag}
                alt={`${league.areaName} Flag`}
                width={30}
                height={20}
              />
              <span className={checked ? "bg-blue-200" : ""}>
                {league.name}
              </span>
            </>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}

export default LeagueSelector
