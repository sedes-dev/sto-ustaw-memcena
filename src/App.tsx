import React from 'react';
import './App.scss';
import { Hero } from './Hero';
import { About } from './About';
import { Acts } from './Acts';

function App() {
  return (
    <div className="app" id="home">
      <header className="app__header">
        <div className="app__logo">
          <div>Sto ustaw Memcena</div>
          <div>Katalog propozycji ustaw Sławka Memcena</div>
        </div>
        <nav className="app__nav">
          <a href="#home">Home</a>
          <a href="#about">O autorze</a>
          <a href="#acts">100 ustaw Sławka Memcena</a>
        </nav>
      </header>
      <main>
        <Hero></Hero>
        <section className="app__section">
          <About></About>
        </section>
        <section className="app__section">
          <Acts></Acts>
        </section>
      </main>
      <footer className="app__footer">
        made with 💩 by <a href="https://sedes.dev" target="_blank" rel="noreferrer">sedes.dev</a>
      </footer>
    </div>
  );
}

export default App;
