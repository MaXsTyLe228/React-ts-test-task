import React from 'react';
import UserInfo from "../components/UserPage/UserInfo";
import Repositories from "../components/UserPage/Repositories";

const ProfilePage = () => {
    return (
        <div>
            <UserInfo/>
            <Repositories/>
        </div>
    );
};

export default ProfilePage;