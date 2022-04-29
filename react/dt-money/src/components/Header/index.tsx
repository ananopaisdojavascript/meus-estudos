import { useState } from 'react';
import logo from '../../assets/logo.svg';
import { Modal } from './Modal';
import { Container, Content } from './styles';

export const Header = () => {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
    const handleOpenNewTransactionModal = () => setIsNewTransactionModalOpen(true)

    return (
        <Container>
            <Content>
                <img src={logo} alt="Logo DT Money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>Nova transação</button>
            </Content>
            <Modal/>
        </Container>
    )
}
