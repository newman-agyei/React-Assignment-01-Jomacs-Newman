/**
Task:

Use JSX to render a <ul> list of three favorite fruits.
 */

function Test08() {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default Test08;
