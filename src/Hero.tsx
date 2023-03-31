import React from "react";
import './Hero.scss';

export function Hero() {
  return (
    <div className="hero">
      <img className="hero__image" alt="Sto ustaw Sławka Memcena" src={process.env.PUBLIC_URL + '/sto-ustaw-memcena-tlo.jpeg'}/>
      <h1 className="hero__title">
        100 ustaw Sławka Memcena
      </h1>
    </div>
  )
}