import React, {useEffect, useRef, useState} from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import RepositoryItem from "./RepositoryItem";

const Repositories = () => {
    const {fetchRepos} = useActions()
    const inputRef = useRef<HTMLInputElement | null>(null);
    const {users} = useTypedSelector(state => state.user)
    let pathname = window.location.pathname.slice(1);
    let found = users.find(element => element.login === pathname);
    const {repositories, error, loading} = useTypedSelector(state => state.repos)
    const [items, setItems] = useState(repositories);

    const filterRepos = (event: React.ChangeEvent<HTMLInputElement>) => {
        let filtered = []
        for (let i in repositories) {
            if (repositories[i].name.toLowerCase().includes(event.currentTarget.value.toLowerCase())) {
                filtered.push(repositories[i])
            }
        }
        setItems(filtered)
    }

    useEffect(() => {
        fetchRepos(found.repos_url)
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="RepoSearch">
            <input ref={inputRef} onInput={filterRepos}/>
            <div>
                {inputRef.current?.value != '' ?
                    items.map((repo, key) =>
                        <RepositoryItem key={key} name={repo.name} forks={repo.forks} stars={repo.stargazers_count}
                                        url={repo.html_url}/>
                    ) : repositories.map((repo, key) =>
                        <RepositoryItem key={key} name={repo.name} forks={repo.forks} stars={repo.stargazers_count}
                                        url={repo.html_url}/>)}
            </div>
        </div>
    );
};

export default Repositories;