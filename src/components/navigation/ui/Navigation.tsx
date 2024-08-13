import React from 'react';
import { Styled } from './NavigationStyled';
import { Link } from 'react-router-dom';
import Btn from '../../../utils/mock/Btn';
export const Navigation = () => {
    return (
        <Styled.Container>
            <Styled.Nav>
                <h2>Github search</h2>

                <Styled.LinksContainer>
                    <Link to='/'>
                        <Btn variant='text'>Home</Btn>
                    </Link>
                    <Link to='/favorites'>
                        <Btn variant='text'>Favorite</Btn>
                    </Link>
                </Styled.LinksContainer>
            </Styled.Nav>
        </Styled.Container>
    );
};
