import { useState } from 'react';
import { ModalWindow } from './ModalWindow';

export const Modal = () => {
    const [openModal, setOpenModal] = useState(false);
    const open = () => setOpenModal(true);
    return (
        <div>
            <button onClick={open}>Abrir Modal</button> 
            {openModal && <ModalWindow closeModal={setOpenModal}/>}
        </div>
    )
}