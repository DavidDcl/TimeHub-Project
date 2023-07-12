import { useEffect, useState } from "react";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>Liste de Posts</h1>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Home;
