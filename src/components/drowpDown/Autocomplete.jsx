import React from 'react'
import './autocomplete.css'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { useState } from 'react'

function Autocomplete({ selected, setSelected, items }) {
    const [isActive, setIsActive] = useState(false)
  return (
    <div className='dropdown'>
        <div className="dropdown-btn"
            onClick={(e) => {
                setIsActive(!isActive)
            }}
        >
            {selected}
            {isActive?<FaCaretUp size={15} />:<FaCaretDown size={15} />}
        </div>
        {isActive && (
        <div className="dropdown-content">
            {items.map(item => (
                <div
                    key={item}
                    onClick={(e) => {
                        setSelected(item);
                        setIsActive(false);
                    }}
                    className="dropdown-item"
                >
                    {item}   
                </div>
            ))}
        </div>
        )}
    </div>
  )
}

export default Autocomplete
