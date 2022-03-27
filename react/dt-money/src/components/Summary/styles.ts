import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;

    div {
        background: var(--white);
        padding: 1.5rem 2rem;
        border-radius: .25rem;

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        p {
            color: var(--text-title);
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: normal;
            line-height: 3rem;
        }

        &.highlight {
            background: var(--green);
            color: var(--white);

            p {
                color: var(--white);
            }
        }
    }
`