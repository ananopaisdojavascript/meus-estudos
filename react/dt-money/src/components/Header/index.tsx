import Logo from '../../assets/Logo.svg';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="Logo dt money" />
                <button type='button'>Nova Transação</button>
            </Content>
        </Container>
    )
}