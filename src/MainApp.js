import { AudioContext } from "./Context/AudioContext";
import App from "./App";
import { useState } from "react";
export default function MainApp() {
  const [audioPlayer, setaudioPlayer] = useState(null);
  const [audioPauser, setaudioPause] = useState(null);
  return (
    <AudioContext.Provider
      value={{
        audioPauser: audioPauser,
        setaudioPause: setaudioPause,
        audioPlayer: audioPlayer,
        setaudioPlayer: setaudioPlayer
      }}
    >
      <App />
    </AudioContext.Provider>
  );
}
