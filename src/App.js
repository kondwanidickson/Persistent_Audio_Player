import "./styles.css";
import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./Users";
import Home from "./Home";
import About from "./About";
import { AudioContext } from "./Context/AudioContext";

import { useContext } from "react";
import ContextExample from "./ContextExample";
export default function App() {
  const audioRef = useRef(null);
  const { setaudioPause, setaudioPlayer } = useContext(AudioContext);

  const PlayAudio = () => {
    console.log(audioRef.current);
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };
  useEffect(() => {
    setaudioPlayer({ audioplay: audioRef.current });
  }, []);
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/context">ContextExample</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About PlayAudio={PlayAudio} pauseAudio={pauseAudio} />
            </Route>
            <Route path="/users">
              <Users PlayAudio={PlayAudio} pauseAudio={pauseAudio} />
            </Route>

            <Route path="/context">
              <ContextExample />
            </Route>
            <Route path="/home">
              <Home PlayAudio={PlayAudio} pauseAudio={pauseAudio} />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* Here is the AUDIO TAG*/}
      <div className="spotify-tag">
        <audio
          ref={audioRef}
          controls
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
        >
          {" "}
        </audio>
      </div>
    </div>
  );
}
