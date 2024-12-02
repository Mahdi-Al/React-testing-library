export default function ListOfLi({ usernames }) {
  return (
    <ul>
      {usernames.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
}
