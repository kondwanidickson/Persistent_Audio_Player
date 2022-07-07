import { AudioContext } from "./Context/AudioContext";

import { useContext } from "react";
export default function ContextExample() {
  const { audioPlayer } = useContext(AudioContext);
  console.log(audioPlayer, "audioPLayer");
  const audioplayer = audioPlayer ? audioPlayer.audioplay : null;
  const player = () => {
    audioplayer.play();
  };
  const pauser = () => {
    audioplayer.pause();
  };
  return (
    <>
      <button onClick={player}>Play Audio using Context</button>
      <button onClick={pauser}>Pause Audio using Context</button>
    </>
  );
}
