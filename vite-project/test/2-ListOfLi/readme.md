Given the following React component:

```js
export default function ListOfLi({ usernames }) {
  return (
    <ul>
      {usernames.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
}
```

Write a test using `@testing-library/react` to verify that the component renders the correct number of `<li>` elements when provided with a list of usernames: ["john", "sam", "jasem", "tom"].

example => `<ListOfLi username={["sara", "fatemeh"]}/>` => expected the number of li elements => 2
