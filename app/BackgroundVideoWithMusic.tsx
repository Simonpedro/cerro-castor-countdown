"use client";
import { useState } from "react";

export function BackgroundVideoWithMusic() {
  const [playing, setPlaying] = useState(false);

  function playAudio() {
    const audio = document.getElementById("audio") as HTMLAudioElement;
    audio.play();
    setPlaying(true);
  }

  return (
    <>
      <video
        id="video"
        src="/snowboard.mp4"
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      <audio
        id="audio"
        src="/snowboard.mp3"
        className="absolute hidden bottom-2 z-10"
        autoPlay
        controls
      />
      {!playing && (
        <button
          onClick={playAudio}
          className="absolute  font-bold bottom-2 p-4 bg-amber-600 text-gray-200 text-xl rounded-2xl"
        >
          Prender musiquita <span className="ml-2">🔊</span>
        </button>
      )}
    </>
  );
}
