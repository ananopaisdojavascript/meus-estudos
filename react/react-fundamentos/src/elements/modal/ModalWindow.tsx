import { useState } from 'react';
import { ModalBody, ModalClose, ModalContent, ModalFooter, ModalHeader, ModalStyle } from "./modalStyle"

export const ModalWindow = ({closeModal}:any) => {
    const close = () => closeModal(false);
    return (
        <ModalStyle>
            <ModalContent>
                <ModalHeader>
                    <ModalClose onClick={close}>&times;</ModalClose>
                    <h2>Modal Header</h2>
                </ModalHeader>
                <ModalBody>
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </ModalBody>
                <ModalFooter>
                    <h3>Modal Footer</h3>
                </ModalFooter>
            </ModalContent>
        </ModalStyle>
    )
}