import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.headerImage}>
                <img src={require("./beach.jpg")}/>
            </div>
            <div className={classes.descriptionBlock}>
                <div className={classes.profilePhoto}>
                    {!profile.photos.large ?
                        <img src="https://ih1.redbubble.net/image.390757287.7137/ap,550x550,12x12,1,transparent,t.png"/>
                        : <img src={profile.photos.large}/>}
                </div>
                <div>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;