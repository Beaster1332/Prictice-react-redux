import React from "react";
import classes from './Profile.module.css';

const Profile = (props) => {
    return <div className={classes.profileBlock}>
        <div className={classes.infoBlock}>
            <div className={classes.infoItem}>{`${props.name}`}</div>
        </div>
        <div className={classes.todoBlock}>

        </div>
    </div>
}

export default Profile;