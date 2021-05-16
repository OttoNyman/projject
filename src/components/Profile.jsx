import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://luxfon.com/images/201203/luxfon.com_4224.jpg"
          alt=""
        />
      </div>
      <div>ava+description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>Post1</div>
          <div className={s.item}>Post2</div>
          <div className={s.item}>Post3</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
