import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
`
export const TransactionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding: 1rem;
    border-radius: 4px;
    margin: 1rem 0;
    background-color: #fff;

    .deposit {
        color: var(--green)
    }

    .withdraw {
        color: var(--red)
    }

    p {
        text-align: center;
    }
`