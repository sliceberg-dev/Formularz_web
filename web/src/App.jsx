
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [tytul, setTytul] = useState('');
  const [rodzaj, setRodzaj] = useState('');

  const dodajFilm = () => {
    console.log('tytul:', tytul, '; rodzaj:', rodzaj);
  };

  return (
    <div className="container">
      <div className="form-group mb-2">
        <label htmlFor="tytul">Tytuł filmu</label>
        <input
          type="text"
          className="form-control"
          id="tytul"
          value={tytul}
          onChange={(e) => setTytul(e.target.value)}
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="rodzaj">Rodzaj</label>
        <select
          className="form-control"
          id="rodzaj"
          value={rodzaj}
          onChange={(e) => setRodzaj(e.target.value)}
        >
          <option value=""></option>
          <option value="1">Komedia</option>
          <option value="2">Obyczajowy</option>
          <option value="3">Sensacyjny</option>
          <option value="4">Horror</option>
        </select>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={dodajFilm}
      >
        Dodaj
      </button>
    </div>
  );
}

export default App;
