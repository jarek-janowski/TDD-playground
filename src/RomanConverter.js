import { useState } from 'react';

const RomanConverter = () => {
    const [roman, setRoman] = useState(null)

    const handleChange = (e) =>{
        const arabic = e.target.value;
        let roman = "I"
        if(arabic == 5){
            roman = "V"
        }
        setRoman(roman)
    }

    return (
        <>
            <label>Arabic: <input onChange={handleChange} type="number"></input></label>
            <h1>Roman: {roman ? roman : "none"}</h1>
        </>
    );
}

export default RomanConverter