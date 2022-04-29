import { useState } from "react";
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { ModalButtonContainer, ModalButton, ModalCloseButton, ModalContent, ModalFormGroup, ModalFormInput, ModalGeneralStyle, ModalInnerContainer, ModalButtonSubmit } from "./styles";

export const Modal = () => {

    const [type, setType] = useState('Entrada');

    return (
        <ModalGeneralStyle>
            <ModalContent>
                <ModalCloseButton>&times;</ModalCloseButton>
                <div>
                    <h2>Cadastrar Transação</h2>
                </div>
                <ModalFormGroup>
                    <ModalFormInput type="text" placeholder="Nome" />
                    <ModalFormInput type="text" placeholder="Valor" />
                    <ModalButtonContainer>
                        <ModalButton type="button" onClick={() => { setType('Entrada') }} isActive={type === 'Entrada'}>
                            <ModalInnerContainer>
                                <img src={income} alt="Entrada" />
                                Entrada
                            </ModalInnerContainer>
                        </ModalButton>
                        <ModalButton type="button" onClick={() => { setType('Saída') }} isActive={type === 'Saída'}>
                            <ModalInnerContainer>
                                <img src={outcome} alt="Saída" />
                                Saída
                            </ModalInnerContainer>
                        </ModalButton>
                    </ModalButtonContainer>
                    <ModalFormInput type="text" placeholder="Categoria" />
                    <ModalButtonContainer>
                        <ModalButtonSubmit type="submit">
                            Cadastrar
                        </ModalButtonSubmit>
                    </ModalButtonContainer>
                </ModalFormGroup>

            </ModalContent>
        </ModalGeneralStyle>
    )
}