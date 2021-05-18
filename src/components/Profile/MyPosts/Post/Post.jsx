import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://igorzuevich.com/wp-content/uploads/2017/12/avatarka-v-telegram.png" />
      {props.message}
      <div>
        <span>Like ({props.likeCounts})</span>
      </div>
    </div>
  );
};

export default Post;
