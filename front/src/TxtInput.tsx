export default function TextInput(props: any) {
  return (
    <div>
      <label>{props.title} : </label>
      <input type='text' onChange={(e) => props.onChange(e.target.value)}></input>
    </div>
  );
}
