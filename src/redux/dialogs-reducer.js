const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: newMessage}]
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;