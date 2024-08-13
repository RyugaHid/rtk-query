import React from 'react';
import { IRepos } from '../../models/users.model';
import Styled from './RepoCard.styled';
import Btn from '../../utils/mock/Btn';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { useState } from 'react';
export function RepoCard({ repo }: { repo: IRepos }) {
    const { addFavorite, removeFavorite } = useActions();
    const favorites = useAppSelector(state => state.github.favorites);
    const [fav, setIsFav] = useState(favorites.includes(repo.html_url));

    function addToFavorite(event: React.MouseEvent) {
        event.preventDefault();
        addFavorite(repo.html_url);
        setIsFav(true);
    }
    function removeFromFavorite(event: React.MouseEvent) {
        event.preventDefault();
        removeFavorite(repo.html_url);
        setIsFav(false);
    }
    return (
        <Styled.Card>
            <a href={repo.html_url} target='_blank' rel='noreferrer' style={{ color: '#fff' }}>
                <h3
                    style={{
                        fontSize: '22px',
                    }}
                >
                    {repo.full_name}
                </h3>
                <p
                    style={{
                        fontSize: '16px',
                    }}
                >
                    Forks: <span>{repo.forks}</span> Watchers: <span>{repo.watchers}</span>
                </p>
                <p
                    style={{
                        fontFamily: 'revert',
                    }}
                >
                    {repo?.description}
                </p>
            </a>
            {!fav && (
                <Btn type='button' variant='outlined' onClick={addToFavorite}>
                    Add
                </Btn>
            )}
            {fav && (
                <Btn type='button' variant='outlined' onClick={removeFromFavorite}>
                    Remove
                </Btn>
            )}
        </Styled.Card>
    );
}
