import React from "react";
import './About.scss'

export function About() {
  return (
    <div id="about" className="about">
      <h2 className="section-title">
        O autorze
      </h2>
      <p className="about__paragraph">
        Urodziłem się dawno temu w Toruniu, ukończyłem gimnazjum z czerwonym paskiem i tyle mi wystarczyło. Już od najmłodszych lat masakrowałem nauczycieli WOSu swoimi poglądami i pomysłami. Zaraz po opuszczeniu murów szkoły pod skrzydła wziął mnie najlepszy polski polityk, moralny spadkobierca Józefa Pisłudskiego, niestrudzony w w walce o wolność i normalność, Szanowny Pan Janusz Kurwin-Mickey.
      </p>
      <p className="about__paragraph">
        Oto moje sto ustaw, których może sam nie napisałem, ale za to po wyborach, których nie wygram, na pewno nie wprowadzę.
      </p>
    </div>
  )
}