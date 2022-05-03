import React, { useEffect, useState } from 'react';
import { Modal } from './Modal';
import './App.css';
import axios from 'axios';

function App() {
  const url = 'http://localhost:4000/catGallery';
  const [showGallery, setShowGallery] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const open = () => setOpenModal(true);

  const fetchData = async () => {
    const { data } = await axios.get(url);
    setShowGallery(data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <section className="grid-section">
        {showGallery.map(cat => (
          <div className="grid">
            <div className="grid-img">
              <img src={cat.imgLink} alt="Gatos" />
            </div>
            <div className="overlay">
              <h2>{cat.title}</h2>
              <button className="btn">Enter</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
