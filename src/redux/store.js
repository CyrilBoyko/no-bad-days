import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: 'It\'s my first post', likesCount: 23}
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Cyril'},
                {id: 2, name: 'Ilya'},
                {id: 3, name: 'Nata'},
                {id: 4, name: 'Andy'},
                {id: 5, name: 'Kate'},
                {id: 6, name: 'Max'}
            ],
            messages: [
                {id: 1, message: 'Oi!'},
                {id: 2, message: 'How is it going?'},
                {id: 3, message: 'Check out my new project on git!'},
                {id: 4, message: 'I need a job so bad!'},
                {id: 5, message: 'Going crazy...'},
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;