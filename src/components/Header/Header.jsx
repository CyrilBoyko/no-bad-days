import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <div>
            <img src="https://i.pinimg.com/originals/dd/0b/e6/dd0be688e213939c1294604d793484ae.png"/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>

    </header>
};

export default Header;