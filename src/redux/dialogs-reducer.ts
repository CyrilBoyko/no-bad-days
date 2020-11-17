import {InferActionsTypes} from "./redux-store";

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Cyril'},
        {id: 2, name: 'Ilya'},
        {id: 3, name: 'Nata'},
        {id: 4, name: 'Andy'},
        {id: 5, name: 'Kate'},
        {id: 6, name: 'Max'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Oi!'},
        {id: 2, message: 'How is it going?'},
        {id: 3, message: 'Check out my new project on git!'},
        {id: 4, message: 'I need a job so bad!'},
        {id: 5, message: 'Going crazy...'},
    ] as Array<MessageType>,
};

const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/ADD-MESSAGE':
            let newMessage = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: newMessage}]
            };
        default:
            return state;
    }
};

export const actions = {
    addMessageActionCreator: (newMessageText: string) => ({type: 'SN/DIALOGS/ADD-MESSAGE', newMessageText} as const)
}

export default dialogsReducer;

export type initialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>