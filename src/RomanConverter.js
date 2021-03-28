import { useState } from 'react';
import toRoman from './toRoman'


const RomanConverter = () => {
    const [roman, setRoman] = useState(null)

    const handleChange = (e) =>{
        const arabic = e.target.value;
        if(arabic === 0){
            setRoman("none")
        }
        else if(arabic > 4999){
            setRoman("try something below 5000")
        }
        else{
            setRoman(toRoman(arabic))
        }
    }
    return (
        <>
            <label>Arabic: <input onChange={handleChange} type="number"></input></label>
            <h1>Roman: {roman ? roman : "none"}</h1>
        </>
    );
}

export default RomanConverter