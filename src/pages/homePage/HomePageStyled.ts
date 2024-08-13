import styled from 'styled-components';

export const Styled = {
    Container: styled.div`
        margin: 0 auto;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;
        align-items: center;
    `,
    List: styled.ul`
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        max-height: 200px;
        width: 400px;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        position: relative;
        border-radius: 10px;

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #1f75cb;
            border-radius: 8px;
        }

        ::-webkit-scrollbar-track {
            background-color: #e24329;
            border-radius: 10px;
        }
    `,
    ListElement: styled.li`
        font-size: 24px;
        border-bottom: 1px solid black;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: #007fff;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
        }
    `,
    CardContainer: styled.div`
        margin-top: 20px;
        overflow-y: auto;
        max-height: 300px;
        width: 500px;
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #1f75cb;
            border-radius: 20px;
        }

        ::-webkit-scrollbar-track {
            background-color: #e24329;
            border-radius: 10px;
        }
    `,
};
