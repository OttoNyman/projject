import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts =  (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCounts={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  //ф-я, кот прикрепим к событию онклик
  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };

  let onPostChange = () => {
    let text=newPostElement.current.value;
    //теперь переменную text засовываем в ...
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch (action);
  };

  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          {/* пусть value будет = чему-то из пропсов */}
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
