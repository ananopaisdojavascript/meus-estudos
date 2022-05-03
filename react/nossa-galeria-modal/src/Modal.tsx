import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

export const Modal = ({closeModal}:any) => {
    const url = 'http://localhost:4000/catGallery';
    const [showCat, setShowCat] = useState<any[]>([]);
    
    const fetchData = async () => {
        const { data } = await axios.get(url);
        setShowCat(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const close = () => closeModal(false);

    return (
        <div>
            {showCat.map(cat => (
                <section className="modal">
                <button onClick={close} className="modal-btn btn">Close</button>
                <img src={cat.imgLink} alt="" className="modal__content" />
                </section>
            ))}
        </div>
    )
}

