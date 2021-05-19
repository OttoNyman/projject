import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div className={s.content}>
        <img
          src="https://luxfon.com/images/201203/luxfon.com_4224.jpg"
          alt=""
        />
      </div>
      <div>ava+description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
