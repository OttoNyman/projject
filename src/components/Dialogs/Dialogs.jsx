import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  
  // let dialogElements = [
    //   <DialogItem name={dialogs[0].name} id={dialogs[0].id} />,
    //   <DialogItem name={dialogs[1].name} id={dialogs[1].id} />,
    // ];
    
    let dialogElements = props.state.dialogs.map((d) => (
      <DialogItem name={d.name} id={d.id} />
    ));

  let messagesElements = props.state.messages.map((m) => (
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
