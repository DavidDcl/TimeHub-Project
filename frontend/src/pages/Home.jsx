import { useEffect, useState } from "react";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const fetchData = async () => {
    await fetch("http://localhost:8000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    if (content) {
      e.preventDefault();
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: `${content}` }),
      };
      fetch(`http://localhost:8000/api/posts`, requestOptions);
      setContent("");
      setRefresh(!refresh);
    } else {
      e.preventDefault();
    }
  };

  return (
    <div>
      <div className="flex rounded-lg border-2 border-primary mx-3 mb-5">
        <div className="flex flex-col">
          <img
            className="rounded-full w-12 h-12 ml-3 mt-3 mr-8"
            src="https://picsum.photos/200/300"
            alt=""
          />
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-3">
            <textarea
              className="bg-transparent flex-grow mt-3 border-none outline-none resize-none"
              placeholder="What's up baby ? ..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                className="mr-3 mb-3 text-secondary bg-accent rounded-lg px-3 py-1"
                type="submit"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
      {posts &&
        posts
          .toReversed()
          .map((post) => (
            <Post
              key={post.id}
              post={post}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          ))}
    </div>
  );
};

export default Home;
