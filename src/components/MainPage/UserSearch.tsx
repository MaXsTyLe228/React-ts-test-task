import React, {useRef} from 'react';
import {useActions} from "../../hooks/useActions";

const UserSearch = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const {fetchUsers} = useActions()

    const SearchUser = () => {
        let name = inputRef.current?.value
        let path = 'https://api.github.com/search/users?q='+name
        fetchUsers(path)
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={SearchUser}>Search User</button>
        </div>
    );
};

export default UserSearch;