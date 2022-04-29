import { useState, useEffect } from "react";
import axios from 'axios';

const List = () => {
    const url = 'http://localhost:5000/people';
    const [names, setNames] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCountry, setSearchCountry] = useState('');
    const [searchMBTI, setSearchMBTI] = useState('');

    const fetchData = async () => {
        const { data } = await axios.get(url)
        setNames(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearchTerm = (event: any) => {
        setSearchTerm(event.target.value);
    }

    const handleSelectedCountry = (event: any) => {
        event.preventDefault();
        setSearchCountry(event.target.value)
    }

    const handleSelectedMBTI = (event: any) => {
        event.preventDefault();
        setSearchMBTI(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="Digite um nome" onChange={handleSearchTerm} />

            <select onChange={handleSelectedCountry} value={searchCountry}>
                <option value="">Escolha um país</option>
                <option value="South Korea">South Korea</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
            </select>

            <select onChange={handleSelectedMBTI} value={searchMBTI}>
                <option value="">Escolha um MBTI</option>
                <option value="ENFP">ENFP</option>
                <option value="ESFJ">ESFJ</option>
                <option value="ENTJ">ENTJ</option>
                <option value="ESTP">ESTP</option>
            </select>

            {names.filter(value => {
                if(searchTerm === "" && searchCountry === "" && searchMBTI === "") {
                    return value
                } else if ((value.name.toLowerCase().includes(searchTerm.toLowerCase())) && (value.country.toLowerCase().includes(searchCountry.toLowerCase())) && (value.MBTI.includes(searchMBTI))) {
                    return value
                }
            }).map((value, key) => (
                <ul key={key}>
                    <li>{value.name}</li>
                </ul>
            ))}

        </div>
    )
}

export default List;