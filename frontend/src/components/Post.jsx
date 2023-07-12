const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around">
        <img src="" alt="" />
        <div className="flex justify-around">
          <p>Cleopatre</p>
          <p>Date</p>
        </div>
      </div>
      <p>Post Content</p>
      <div>
        <button>Commentaires</button>
        <button>Like</button>
        <button>Dislike</button>
      </div>
    </div>
  );
};

export default Post;
