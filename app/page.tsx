import { BackgroundVideoWithMusic } from "./BackgroundVideoWithMusic";
import Image from "next/image";
import { Countdown } from "./Countdown";
import { getRemainingTimeInSeconds } from "./get-remaining-time-in-seconds";

export const revalidate = 0;

export default function Home() {
  const countdownCountStart = getRemainingTimeInSeconds();

  return (
    <main className="h-full px-4 md:px-10 flex justify-center items-center">
      <BackgroundVideoWithMusic />

      <div className="relative p-2 bg-slate-500 bg-opacity-50 text-center">
        <div className="bg-slate-500 bg-opacity-50 p-4">
          <div className="p-2 text-3xl">Quedan</div>
          <div className="flex justify-center gap-4 items-center">
            <span className="hidden md:block text-6xl">🏂</span>{" "}
            <Countdown countStart={countdownCountStart} />{" "}
            <span className="hidden md:block text-6xl">🏂</span>
          </div>
          <Image
            className="md:w-4/12 mx-auto"
            src="/los-pibe.jpg"
            alt="Los pibe"
            width={637}
            height={637}
          />
        </div>
      </div>
    </main>
  );
}
