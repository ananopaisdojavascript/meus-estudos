import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        font-size: 1rem;
        color: var(--shape);
        background-color: var(--blue-light);
        border: none;
        padding: 0 2rem;
        border-radius: .25rem;
        height: 3rem;
        transition: .2;
        &:hover {
        filter: brightness(.9)
        }
    }

    
`