import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { ModalBody, ModalClose, ModalContent, ModalFooter, ModalHeader, ModalStyle } from "./modalStyle"

export const ModalWindow = (props: any) => {
    const { show, closeModal } = props;
    const modal = (
        <div className={show ? "overlay" : "hide"} onClick={closeModal}>
        <ModalStyle {...show ? "modal" : "hide"}>
            <ModalContent>
                <ModalHeader>
                    <ModalClose onClick={closeModal}>&times;</ModalClose>
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
        </div>
    )
    return ReactDOM.createPortal(modal, document.getElementById("modal-root"));
}