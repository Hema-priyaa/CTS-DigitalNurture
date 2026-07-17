export function ListofIndianPlayers({ IndianPlayers }) {
  return (
    IndianPlayers.map((item) => {
      return (
        <li key={item}>Mr. {item}</li>
      );
    })
  );
}