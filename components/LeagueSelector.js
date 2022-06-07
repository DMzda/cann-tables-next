import Image from "next/image"
import { RadioGroup } from "@headlessui/react"
import clsx from "clsx"

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
            <div
              className={clsx(
                "my-2 flex gap-2 rounded-md p-2 outline outline-2 outline-slate-300",
                checked && "bg-indigo-200"
              )}
            >
              <div className="flex-shrink-0">
                <Image
                  src={league.areaFlag}
                  alt={`${league.areaName} Flag`}
                  width={30}
                  height={20}
                />
              </div>
              <div>{league.name}</div>
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}

export default LeagueSelector
