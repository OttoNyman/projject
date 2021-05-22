let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 3 },
            { id: 2, message: "It's my first post", likesCount: 17 },
            { id: 3, message: "Yo Yo Yo", likesCount: 0 },
            { id: 4, message: "It's my first post", likesCount: 9 },
        ]
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

export default state;