import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <div className={`${s.dialog} ${s.active}`}>
            <NavLink to="/dialogs/1">Sasha</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/2">Serezha</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/3">Sveta</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/4">Stepan</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/5">Slavik</NavLink>
          </div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>How are you?</div>
          <div className={s.message}>Yo</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
