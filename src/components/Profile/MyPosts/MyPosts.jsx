import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  //это прийдет откуда-то ....потом, пока здесь пишем
  let posts = [
    { id: 1, message: "Hi, how are you?", likeCounts: 3 },
    { id: 2, message: "It's my first post", likeCounts: 17 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likeCounts={p.likeCounts} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {PostElements}
        {/* <Post message={postData[0].message} likeCounts={postData[0].likeCounts} /> */}
      </div>
    </div>
  );
};
export default MyPosts;
