import React from "react";
import { Act as ActType } from "./data/acts";
import "./Act.scss"

type ActProps = {
  act: ActType,
  nr: number
}

export function Act(props: ActProps) {
  const actNr = `${props.nr < 100 ? '0' : ''}${props.nr < 10 ? '0' : ''}${props.nr}`;

  return (
    <div className="act">
      <div className="act__number">Ustawa numer: {actNr}</div>
      <h3 className="act__title">
        {props.act.title}
      </h3>
      <p className="act__description">
        {props.act.description}
      </p>
      {!!props.act.links.length && (
        <div className="act__links">
          <div className="act__links-title">Zobacz też:</div>
          <ul>
            {props.act.links.map(link => (
              <li className="act__link">
                <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}