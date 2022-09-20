export default function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.value} {props.count}
    </button>
  );
}
