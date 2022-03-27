import { Container } from "./styles";

export function Transactions() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de aplicativo</td>
                        <td className="deposit">R$20.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/01/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$800,00</td>
                        <td>Casa</td>
                        <td>22/01/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}