import { useState, useEffect } from "react";
import axios from 'axios';

interface people {
    id: number,
    name: string
}

const List = () => {
    const url = 'http://localhost:5000/people';
    const [names, setNames] = useState<any[]>([]);

    const fetchData = async () => {
        const { data } = await axios.get(url)
        setNames(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ul>
            {names.map(name => (
                <li key={name.id}>{name.name}</li>
            ))}
        </ul>
    )
}

export default List;