let rerenderEntireTree=()=>{
    console.log('стейт изменился');
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe=(observer)=>{
    rerenderEntireTree=observer; //паттерн наблюдатель, observer, publisher-subscriber
}

export default state;