import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import { addPost } from './redux/state';

const App = (props) => {
  return (
    <div className="app-wrapper ">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        {/* можно использовать рендер, можно компонент (если компонент - сложно прокинуть пропсы) */}
        <Route path="/dialogs"
          render={() => <DialogsContainer store={props.store} />} />
        <Route path="/profile"
          render={() => <Profile store={props.store} />
          } />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
