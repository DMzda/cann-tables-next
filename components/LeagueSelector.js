import Image from "next/image"
import { RadioGroup } from "@headlessui/react"

const LeagueSelector = ({ leagues, selectedLeague, setSelectedLeague }) => {
  return (
    <RadioGroup
      value={selectedLeague}
      onChange={setSelectedLeague}
      className="rounded-md border-2 border-slate-400 p-2"
    >
      <RadioGroup.Label className="font-bold">League</RadioGroup.Label>
      {leagues.map((league) => (
        <RadioGroup.Option
          value={league.code}
          key={league.code}
          className="cursor-pointer"
        >
          {({ checked }) => (
            <div className="flex gap-2 p-1">
              <div className="flex-shrink-0">
                <Image
                  src={league.areaFlag}
                  alt={`${league.areaName} Flag`}
                  width={30}
                  height={20}
                />
              </div>
              <div className={checked ? "w-full bg-blue-200" : ""}>
                {league.name}
              </div>
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}

export default LeagueSelector
