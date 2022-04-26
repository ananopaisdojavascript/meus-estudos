import { useState } from "react";

const Forms = () => {
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [place, setPlace] = useState('');
    const handleNameChange = (event: any) => setName(event.target.value);
    const handleChange = (event: any) => setGroup(event.target.value);
    const handlePlaceChange = (event: any) => setPlace(event.target.value);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Você escolheu: ${place}`)
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder='Digite um nome'
                    value={name}
                    onChange={handleNameChange}
                />
            </form>

            <div>
                <h2>Nome: {name}</h2>
            </div>

            <form>
                <select onChange={handleChange} value={group}>
                    <option value="" selected>Escolha um grupo</option>
                    <option value="Blackpink">Blackpink</option>
                    <option value="Twice">Twice</option>
                    <option value="Beast">Beast</option>
                    <option value="Wonder Girls">Wonder Girls</option>
                    <option value="Red Velvet">Red Velvet</option>
                </select>
            </form>

            <p>Você escolheu: {group}</p>

            <form onSubmit={handleSubmit}>
                <h2>Selecione uma parte da casa</h2>
                <div>
                    <input type="radio" value="cozinha" onChange={handlePlaceChange} name="place"/>
                    <label>Cozinha</label>
                </div>

                <div>
                    <input type="radio" value="sala" onChange={handlePlaceChange} name="place"/>
                    <label>Sala</label>
                </div>

                <div>
                    <input type="radio" value="quarto" onChange={handlePlaceChange} name="place" />
                    <label>Quarto</label>
                </div>
                
                <button type="submit">enviar</button>
            </form>

        </div>
    )
}

export default Forms;