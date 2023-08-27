import styled from 'styled-components';

export const FeedbackContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
`

export const Button = styled.button`
    display: block;
    width: 100px;
    padding: 5px 10px;
    text-align: center;
    font-size: 20px;
    color: #000;
    border-radius: 5px;
    border: none;

    &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
}
`;