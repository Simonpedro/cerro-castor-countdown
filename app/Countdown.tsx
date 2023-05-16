"use client";
import { useEffect } from "react";
import { useCountdown } from "usehooks-ts";
import { getRemainingTimeInSeconds } from "./get-remaining-time-in-seconds";

export type CountdownProps = {
  countStart: number;
};

export function Countdown({ countStart }: CountdownProps) {
  const [count, { startCountdown }] = useCountdown({
    countStart,
    intervalMs: 1000,
  });

  useEffect(startCountdown, [startCountdown]);
  const { days, hours, minutes, secondsLeft } =
    secondsToDaysHoursAndMinutesAndSeconds(count);

  const unitByIndex: Record<number, string> = {
    0: "días",
    2: "horas",
    4: "minutes",
    6: "segundos",
  };

  return (
    <div className="flex justify-center text-xl md:text-6xl gap-3 p-4">
      {[days, ":", hours, ":", minutes, ":", secondsLeft].map((item, index) => {
        const unit = unitByIndex[index];
        return (
          <div key={index} className="flex flex-col gap-2 items-center">
            {item}
            {unit && <span className="text-base">{unit}</span>}
          </div>
        );
      })}
    </div>
  );
}

function secondsToDaysHoursAndMinutesAndSeconds(seconds: number) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = Math.floor(seconds % 60);

  return { days, hours, minutes, secondsLeft };
}
