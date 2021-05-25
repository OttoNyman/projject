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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}

export default store;
window.store = store;