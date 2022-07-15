import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

interface UserProps {
    name: string;
    img: string;
    repos: number;
}

const UserItem = (props: UserProps) => {
    const navigate = useNavigate();

    const getUserInfo = () => {
        navigate('/' + props.name);
    }

    return (
        <div className="UserItem" onClick={getUserInfo}>
            <img className="avatar" src={props.img}/>
            <span className="name">
                {props.name}
            </span>
            <span className="repos">
                Repos: {props.repos}
            </span>
        </div>
    );
};

export default UserItem;