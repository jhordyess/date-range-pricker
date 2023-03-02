import * as React from "react";
import { DayNumbers } from "luxon";

type TBodyProps = {
  monthWeeks: {
    values: number[];
    key: string;
  }[];
  currDay: number;
};

const week = [
  { label: "Mo", key: "mo" },
  { label: "Tu", key: "tu" },
  { label: "We", key: "we" },
  { label: "Th", key: "th" },
  { label: "Fr", key: "fr" },
  { label: "Sa", key: "sa" },
  { label: "Su", key: "su" },
];

const HeadRow = () => (
  <tr>
    {week.map(({ label, key }) => (
      <th key={key}>
        <div className="w-full flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
            {label}
          </p>
        </div>
      </th>
    ))}
  </tr>
);

const WeekRow = ({
  firstWeek = false,
  days = [],
  currDayIndex = undefined,
  id = "w0883676",
}) => {
  if (days.length < 0 || days.length > 7) throw new RangeError("Max 7 days!");
  const leftEmpty = firstWeek ? 7 - days.length : 0;
  return (
    <tr>
      {Array(leftEmpty)
        .fill(undefined)
        .map((_, index) => (
          <td key={id + "e" + index}>
            <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
          </td>
        ))}
      {days.map((day, index) => (
        <td className={firstWeek ? "pt-6" : ""} key={id + index}>
          {index === currDayIndex ? (
            <div className="w-full h-full">
              <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                <a
                  role="link"
                  tabIndex={0}
                  className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                >
                  {String(day)}
                </a>
              </div>
            </div>
          ) : (
            <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
              <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                {String(day)}
              </p>
            </div>
          )}
        </td>
      ))}
    </tr>
  );
};

const Body = ({ monthWeeks, currDay }: TBodyProps) => (
  <div className="flex items-center justify-between pt-12 overflow-x-auto">
    <table className="w-full">
      <thead>
        <HeadRow />
      </thead>
      <tbody>
        {monthWeeks.map(({ values, key }, index) => (
          <WeekRow
            key={key}
            id={key}
            days={values}
            firstWeek={index === 0}
            currDayIndex={values.indexOf(currDay)}
          />
        ))}
      </tbody>
    </table>
  </div>
);
export default Body;
