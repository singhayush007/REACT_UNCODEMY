import React, { useState } from "react";
import axios from "axios";

function Post() {
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        { name }
      );
      console.log("User Created:", res.data);

      setUser((prev) => [
        ...prev,
        { ...res.data, id: Date.now() }, // custom id
      ]);

      setName("");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <h2>Post User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <ul>
        {user.map((u, index) => (
          <li key={index}>
            id: {u.id} | name: {u.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Post;
