import styled from 'styled-components';

export const Styled = {
    Container: styled.div`
        height: 50px;
        padding: 0 30px;
        background-color: #303030;
        margin-bottom: 20px;
        color: #fff;
        text-align: center;
    `,
    Nav: styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        max-width: 1200px;
        margin: 0 auto;
    `,
    LinksContainer: styled.div`
        display: flex;
        gap: 20px;
    `,
    Link: styled.p`
        color: #c5c7c8;
        font-size: 18px;
        &:hover {
            text-decoration: underline;
        }
    `,
};
