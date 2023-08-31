import background from "../img/background/background.png";
import avatar from "../img/avatar.png";
import React from "react";

export const Profile = () => {
    return(
        <div className="content">
            <div className="bg-img">
                <img src={background} alt="background"/>
            </div>
            <div className="avatar-img">
                <img src={avatar} alt="avatar"/>
            </div>
            <div className="my-posts">
                My posts
            </div>
            <div className="new-posts">
                New posts
            </div>
            <div className="posts">
                <div>post 1</div>
                <div>post 2</div>
                <div>post 3</div>
            </div>
        </div>
    )
}