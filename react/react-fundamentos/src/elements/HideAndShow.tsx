import { useState } from 'react';

export const HideAndShow = () => {
    const [hidden, setHidden] = useState(true);

    const hideAndShow = () => setHidden(hide => !hide);

    return(
        <div>
            <h1>Oi</h1>
            {!hidden ? <h2>Olha eu aqui!!!</h2> : null}
            <button onClick={hideAndShow}>Show/Hide</button>
        </div>

    )
}