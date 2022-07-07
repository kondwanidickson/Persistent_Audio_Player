export default function About(props) {
  return (
    <>
      <button onClick={props.PlayAudio}>Play Audio on About</button>
      <button onClick={props.pauseAudio}>Pause Audio on About</button>
    </>
  );
}
