import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Serezha" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Stepan" },
    { id: 5, name: "Slavik" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
  ];
  
  // let dialogElements = [
    //   <DialogItem name={dialogs[0].name} id={dialogs[0].id} />,
    //   <DialogItem name={dialogs[1].name} id={dialogs[1].id} />,
    // ];
    
    let dialogElements = dialogs.map((d) => (
      <DialogItem name={d.name} id={d.id} />
    ));

  let messagesElements = messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogElements}</div>
      <div className={s.messages}>{messagesElements} </div>
    </div>
  );
};

export default Dialogs;
