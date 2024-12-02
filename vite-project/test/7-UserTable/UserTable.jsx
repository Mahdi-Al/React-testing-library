import { useEffect, useState } from "react";

export default function UserTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <section>
      <table border="1px">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={index} data-testid="user-row">
                <td> {user.id} </td>
                <td> {user.name} </td>
                <td> {user.email} </td>
                <td> {user.phone} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
