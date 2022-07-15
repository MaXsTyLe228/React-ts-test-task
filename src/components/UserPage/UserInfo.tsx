import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";

const UserInfo = () => {
    const {users} = useTypedSelector(state => state.user)
    let pathname = window.location.pathname.slice(1);
    let found = users.find(element => element.login === pathname);

    const prettyDate = () => {
        return found.created_at.split('T')[0].split("-").reverse().join(".");
    }

    return (
        <div className="UserInfo">
            <img className="avatar" src={found.avatar_url}/>
            <div className="information">
                <div className="item"> {found.login}</div>
                <div className="item"> {found.email}</div>
                <div className="item"> {found.location}</div>
                <div className="item"> created at: {prettyDate()}</div>
                <div className="item"> followers: {found.followers}</div>
                <div className="item">following: {found.following}</div>
            </div>
        </div>
    );
};

export default UserInfo;