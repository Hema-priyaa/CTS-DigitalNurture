export function Scorebelow70({ players }) {
  // Filter feature using ES6 arrow function
  const players70 = players.filter((item) => item.score <= 70);

  return (
    players70.map((item) => {
      return (
        <div key={item.name}>
          <li>Mr. {item.name} <span> {item.score} </span></li>
        </div>
      );
    })
  );
}