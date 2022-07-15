import React from 'react';

interface RepositoryProps {
    name: string;
    forks: string;//forks
    stars: number;//stargazers_count
    url: string;
}

const RepositoryItem = (props: RepositoryProps) => {
    return (
        <a className="repositoryItem" target = "_blank" href={props.url}>
            <div className="name">
                {props.name}
            </div>
            <div className="forks_stars">
                forks: {props.forks}
                stars: {props.stars}
            </div>
        </a>
    );
};

export default RepositoryItem;