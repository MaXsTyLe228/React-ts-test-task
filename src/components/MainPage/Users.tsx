import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import UserItem from "./UserItem";

const Users = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map((item, key) =>
                <UserItem key={key} name={item.login} img={item.avatar_url} repos={item.public_repos}/>
            )}
        </div>
    );
};

export default Users;