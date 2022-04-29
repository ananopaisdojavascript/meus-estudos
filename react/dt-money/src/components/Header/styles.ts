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

export const ModalGeneralStyle = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

export const ModalContent = styled.div`
    width: 25rem;
    height: 25rem;
    padding: 1rem;
    background-color: #fff;
    margin: auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: animatetop;
    animation-duration: 0.4s;

    @keyframes animatetop {
        from {top: -300px; opacity: 0}
        to {top: 0; opacity: 1}
    }
`

export const ModalCloseButton = styled.span`
    color: var(--text-body);
    float: right;
    font-size: 28px;
`

export const ModalTitle = styled.h2`
    margin-top: 2rem;
`
export const ModalFormGroup = styled.div`
    display: block;
    margin: 1rem auto;
    width: 100%;
`

export const ModalFormInput = styled.input`
	padding: 0.5em;
	border: 1px solid var(--text-body);
    background-color: var(--background);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const ModalButtonContainer = styled.div`
    display: inline-block;
    width: 100%;
    margin-bottom: .5rem;
`

export const ModalButton = styled.button<isActive>`
    width: 100%;
    padding: .5rem 0;
    margin-bottom: .5rem;
`
export const ModalInnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalButtonSubmit = styled.button`
    border: none;
    color: #fff;
    background-color: var(--green);
    width: 100%;
    padding: .5rem 0;
    border-radius: 4px;
    margin-bottom: .5rem;
`
interface isActive {
    isActive: boolean;
}
