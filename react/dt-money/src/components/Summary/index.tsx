import { Container } from "./styles";
import Entradas from '../../assets/Entradas.svg';
import Saídas from '../../assets/Saídas.svg';
import Total from '../../assets/Total.svg';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Entradas} alt="ícone de entrada" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Saídas} alt="ícone de saída" />
                </header>
                <strong>- R$200,00</strong>
            </div>

            <div className="highlight">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="ícone de total" />
                </header>
                <strong>R$800,00</strong>
            </div>
        </Container>
    )
}