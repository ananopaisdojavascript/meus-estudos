import { useState } from 'react';
import { ModalWindow } from './ModalWindow';

export const Modal = () => {
    
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    return (
        <div>
            {!show && <button onClick={openModal}>Abrir Modal</button>}
            <ModalWindow closeModal={closeModal} show={show}/>
        </div>
    )
}