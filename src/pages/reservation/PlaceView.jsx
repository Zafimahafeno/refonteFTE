import React from 'react'
import { useState } from 'react'
import './places.css'

function PlaceView() {
    const [btnState, setBtnState] = useState(false);
    const handleClick = () => {
        setBtnState(btnState => !btnState);
    }
    let toggleClassCheck = btnState ? 'active':'';
  return (
      <button
          className={`btn${toggleClassCheck}`}
          onClick={handleClick}
      />
  )
}

export default PlaceView;
