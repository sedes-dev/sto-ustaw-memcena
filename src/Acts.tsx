import React from "react";
import acts from "./data/acts";
import { Act } from "./Act";
import "./Acts.scss";

export function Acts() {
  return (
    <div className="acts" id="acts">
      <h2 className="section-title">
        100 ustaw Sławka Memcena
      </h2>
      <div className="acts__list">
        {acts.map((act, index) => (
          <Act act={act} nr={index + 1} key={index}></Act>
        ))}
      </div>
    </div>
  )
}