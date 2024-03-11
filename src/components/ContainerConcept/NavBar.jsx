import React, { useState } from 'react';

const NavBar = ({ handleNotificationClick }) => {
    const buttons = [
        {
            key: "success",
            value: "Success",
        },
        {
            key: "error",
            value: "Error",
        },
        {
            key: "warning",
            value: "Warning",
        },
        {
            key: "all",
            value: "All",
        },
    ]

    const [activeButton , setActiveButton] = useState('all');
    const handleClick = (e) => {
        handleNotificationClick(e.target.name);
        setActiveButton(e.target.name.toLowerCase());
    }

    return (
        <>
            {
                buttons.map((item) => (
                    <button
                        onClick={handleClick}
                        name={item.key}
                        className={activeButton === item.key ? 'active' : ''}
                    >
                        {item.value}
                    </button>
                ))
            }
        </>
    )
}

export default NavBar;
