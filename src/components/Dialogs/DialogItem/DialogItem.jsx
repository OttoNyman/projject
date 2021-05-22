import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <img
        src="http://pm1.narvii.com/6595/906bbfcc7e6ba8544c1d67de10f3ddada51e3566_00.jpg"
        alt=""
      />
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
