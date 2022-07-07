
import styled, { keyframes } from 'styled-components';

/* ========================= */
/* ====== ProductList ====== */
/* ========================= */

export const ListContainer = styled.div`
    display: flex;
    width: 62rem;
    margin: .5rem auto;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

// ---- ProductItem ---- //

export const Card = styled.div`
    width: 10rem;
    height: 13rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .5rem;
    border-radius: .5rem;
    border: 1px solid #ccc;
    margin: .5rem;
    box-shadow: 1px 1px 1px #000;
    transition: filter ease 1s;
    background: #ddd;
    &:hover {
        filter: brightness(1.1);
    }
`;

export const CardImage = styled.img`
    width: 75%;
    height: 7.5rem;
`;

export const CardBody = styled.div``;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CardTitle = styled.h5``;

export const CardButton = styled.button``;

/* ======================== */
/* ======== Header ======== */
/* ======================== */

export const HeaderContainer = styled.header`
    background: red;
    margin-block-end: 3rem;
    display: flex;
    justify-content: space-between;
    padding: .5rem 14rem;
`;

export const HeaderOrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    color: #fff;
`;

export const HeaderSubtotal = styled.h3`
    margin: 0;
    text-align: right;
`;

export const HeaderTotalItems = styled.p`
    margin: 0;
    text-align: right;
    font-size: .9rem;
`;

export const HeaderImage = styled.img``;

/* ========================= */
/* ======== Spinner ======== */
/* ========================= */

const Gradient = keyframes`
    0% {
      background-position: -100% 0;
    }

    100% {
      background-position: 100% 0;
    }
`;

export const SkeletonCard = styled(Card)`
    animation-name: ${Gradient};
    animation-duration: 3.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background: linear-gradient(
        to right,
        #ccc 2%,
        #ddd 18%,
        #ccc 33%
    );
    background-size: 50%;
    box-shadow: none;
`;

/* ======================= */
/* ======== Modal ======== */
/* ======================= */

export const ModalContaier = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    padding-right: 15px;
    top: 0;
    left: 0;
    z-index: 1000;
    background: #0005;
`;

    export const ModalContent = styled.div`
    box-shadow: 0 0 .25rem #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    height: 550px;
    border-radius: 0.5rem;
    background: #808080;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalTitle = styled(CardTitle)`
    align-self: flex-start;
    margin: 0 0 1rem;
    font-size: 1.5rem;
`;

export const ModalImage = styled.img`
    width: 100%;
    height: 14rem;
    margin: 2rem 0 1rem;
`;

export const ModalPrice = styled(HeaderSubtotal)`
    align-self: flex-end;
    margin: 0 0 1rem;
`;

export const ModalCloseButton = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 1001;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 1001;
    transition: color ease 1s;
    color: black;
    font-size: 1.5rem;
    &:hover {
        color: white;
    }
`;

export const ModalActionButton = styled.button`
    position: absolute;
    bottom: 1rem;
`;


/* ======================= */
/* ======================= */
/* ======================= */
