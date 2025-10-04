import React, { useEffect, useState } from "react";

function FetchApi() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(res);
      const data = await res.json();
      console.log(data);
      setUsers(data);
      setLoading(false);
    }
    fetchUsers();
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <div>Fetch API</div>
      <h2>UserList</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default FetchApi;
