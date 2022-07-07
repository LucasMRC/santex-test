
import styled, { keyframes } from 'styled-components';

/* ========================= */
/* ====== ProductList ====== */
/* ========================= */

export const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

// ---- ProductItem ---- //

export const Card = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 10px 10px;
    box-shadow: 1px 1px 1px #000;
    transition: filter ease 1s;
    background: #ddd;
    &:hover {
        filter: brightness(1.1);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 250px;
`;

export const CardBody = styled.div``;

export const CardHeader = styled.div`
display: flex;
justify-content: space-between;
`;

export const CardTitle = styled.h5``;

export const CardPrice = styled.h3``;

export const CardContent = styled.p`
    font-size: 14px;
`;

export const CardButton = styled.button``;

/* ======================== */
/* ======== Header ======== */
/* ======================== */

export const HeaderContainer = styled.header`
    background: red;
    margin-block-end: 50px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const HeaderSubtotal = styled(CardPrice)``;

export const HeaderImage = styled.img``;

/* ========================= */
/* ======== Spinner ======== */
/* ========================= */

export const SpinnerContainer = styled.div`
    width: 100vw;
    height: 80vh;
    position: relative;
`;

export const SpinnerBackground = styled.div`
    background-color: #cccccc;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 75px;
    height: 75px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .5;
`;

// ---- SpinnerAnimation ---- //

export const Rotate = keyframes`
    0% { 
        -webkit-transform: rotate(0deg) scale(0.8); 
        -moz-transform: rotate(0deg) scale(0.8);
    }

    50% {
        -webkit-transform: rotate(360deg) scale(1.2); 
        -moz-transform: rotate(360deg) scale(1.2);
    }

    100% { 
        -webkit-transform: rotate(720deg) scale(0.8); 
        -moz-transform: rotate(720deg) scale(0.8);
    }
`;

export const Ball1 = keyframes`
    0% {
        box-shadow: 30px 0 0 #f8b334;
    }

    50% {
        box-shadow: 0 0 0 #f8b334;
        margin-bottom: 0;
        -webkit-transform: translate(15px,15px);
        -moz-transform: translate(15px, 15px);
    }

    100% {
        box-shadow: 30px 0 0 #f8b334;
        margin-bottom: 10px;
    }
`;

export const Ball2 = keyframes`
    0% {
        box-shadow: 30px 0 0 #ff9e00;
    }

    50% {
        box-shadow: 0 0 0 #ff9e00;
        margin-top: -20px;
        -webkit-transform: translate(15px,15px);
        -moz-transform: translate(15px, 15px);
    }

    100% {
        box-shadow: 30px 0 0 #ff9e00;
        margin-top: 0;
    }
`;

// -------------------------- //

export const Loader = styled.div`
    animation: ${Rotate} 1s infinite;
    height: 50px;
    width: 50px;
    &:before,
    &:after {
        border-radius: 50%;
        content: '';
        display: block;
        height: 20px;
        width: 20px;
    }
    &:before {
        animation: ${Ball1} 1s infinite;
        background-color: #ff9732;
        box-shadow: 30px 0 0 #f8b334;
        margin-bottom: 10px;
    }
    &:after {
        animation: ${Ball2} 1s infinite; 
        background-color: #ffc400;
        box-shadow: 30px 0 0 #ff9e00;
    }
`;