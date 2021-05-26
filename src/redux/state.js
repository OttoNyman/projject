import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 3 },
                { id: 2, message: "It's my first post", likesCount: 17 },
                { id: 3, message: "Yo Yo Yo", likesCount: 0 },
                { id: 4, message: "It's my first post", likesCount: 9 },
            ],
            newPostText: 'some text'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo" },
            ],
            dialogs: [
                { id: 1, name: "Sasha" },
                { id: 2, name: "Serezha" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Stephan" },
                { id: 5, name: "Slavik" },
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                { id: 1, name: "Sasha" },
                { id: 2, name: "Serezha" },
                { id: 3, name: "Stephan" }
            ]
        }
    },
    _callSubscriber() {
        console.log('стейт изменился');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //паттерн наблюдатель, observer, publisher-subscriber
    },

    //диспатч используем если хотим как-то изменить стейт снаружи (это типа интерфейс)
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

// export const addPostActionCreator = () => {
//     return {
//         type: ADD_POST,
//     };
// };

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});


export default store;
window.store = store;