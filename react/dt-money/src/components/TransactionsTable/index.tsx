import axios from "axios"
import { useEffect, useState } from "react"
import { Container, TransactionContainer } from "./styles"

export const TransactionsTable = () => {
    const url = 'http://localhost:5000/transctions';
    const [transactions, setTransactions] = useState<any[]>([]);
    const fetchData = async () => {
        const { data } = await axios.get(url)
        setTransactions(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Container>
            {transactions.map(transaction => (
                <TransactionContainer>
                    <p>{transaction.title}</p>
                    <p>{transaction.value}</p>
                    <p>{transaction.category}</p>
                    <p>{transaction.createdAt}</p>
                </TransactionContainer>
            ))}
        </Container>
    )
}