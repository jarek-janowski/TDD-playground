import { useState } from 'react';
import toRoman from './toRoman'


const RomanConverter = () => {
    const [roman, setRoman] = useState(null)

    const handleChange = (e) =>{
        const arabic = e.target.value;
        setRoman(toRoman(arabic))
    }

    return (
        <>
            <label>Arabic: <input onChange={handleChange} type="number"></input></label>
            <h1>Roman: {roman ? roman : "none"}</h1>
        </>
    );
}

export default RomanConverter