import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Styled } from '../homePage/HomePageStyled';
const FavoritesPage = () => {
    const { favorites } = useAppSelector(state => state.github);
    if (favorites.length === 0) return <p>No items.</p>;
    return (
        <Styled.Container>
            <ul>
                {favorites.map(f => (
                    <li key={f}>
                        <a href={`https://github.com/${f}`} target='_blank' rel='noreferrer'>
                            {f}
                        </a>
                    </li>
                ))}
            </ul>
        </Styled.Container>
    );
};
export default FavoritesPage;
