import styled from 'styled-components';

const Styled = {
    Card: styled.div`
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        max-height: 500px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-align: start;
        background-color: #39b188;
        color: #fff;
        transition: color 0.2s ease-in-out;
        margin: 15px;
        &:hover {
            background-color: rgb(31 184 203);
            transition: background-color 0.2s ease-in-out;
            cursor: pointer;
        }
    `,
};

export default Styled;
