import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="https://img.discogs.com/PaIijDWasqUMoipeFASTvpm9m-Q=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/L-1038806-1472662598-5188.png.jpg"/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
};

export default Post;