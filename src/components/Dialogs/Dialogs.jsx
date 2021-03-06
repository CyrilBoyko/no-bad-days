import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name}
                                                             key={d.id}
                                                             id={d.id}/>);

    let messagesElements = state.messages.map(m => <Message key={m.id}
                                                            message={m.message}/>);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    };

    if (!props.isAuth) return <Redirect to='/login'/>;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;