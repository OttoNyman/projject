import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.bigImage}>
        <img
          src="https://luxfon.com/images/201203/luxfon.com_4224.jpg"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
};
export default ProfileInfo;
