export default function Home(props) {
  return (
    <>
      <button onClick={props.PlayAudio}>Play Audio on Home</button>
      <button onClick={props.pauseAudio}>Pause Audio on Home</button>
    </>
  );
}
