import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import PostList from "./components/PostList/PostList";
import Header from "./components/Header/Header";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const getPosts = async () => {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=20"
    );
    const data = await responce.data;
    setPosts(data);
    console.log(data);
  };

  const getId = async () => {
    const response = await axios.get("http://localhost:8000/task");
    const data = await response.data;
    setUsers(data);
  };
  useEffect(() => {
    getPosts();
    getId();
  }, []);

  return (
    <>
      {users.name === "Dilnaz" ? (
        <>
          <p>{users.id}</p>
          <p>{users.name}</p>
        </>
      ) : (
        <p>Не Дильназ</p>
      )}
      <Header />
      <PostList postsProps={posts} />
    </>
  );
}

export default App;
