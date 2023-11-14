import { useState } from 'react';

export default function Toggle() {
    const [ toggled, setToggled ] = useState(false);

    function handleToggle() {
        setToggled(isToggled => !isToggled);
    }
     
    return (
        <div>
            <p className={toggled ? 'active' : undefined}>Style me!</p>
            <button onClick={handleToggle}>Toggle style</button>
        </div>
    );
}