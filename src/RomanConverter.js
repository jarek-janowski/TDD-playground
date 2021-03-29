import { useState } from 'react';
import toRoman from './toRoman'
import './RomanConverter.css'


const RomanConverter = () => {
    const [roman, setRoman] = useState(null)

    const handleChange = (e) =>{
        const arabic = e.target.value;
        if(arabic === 0){
            setRoman("none")
        }
        else if(arabic > 3999){
            setRoman("try something below 4000")
        }
        else{
            setRoman(toRoman(arabic))
        }
    }
    return (
        <section className="converter">
            <h1 className="converter__heading">Roman Converter</h1>
            <span className="converter__subheading">(1-3999)</span>
            <label className="converter__label">Arabic: 
                <input className="converter__input" onChange={handleChange} type="number"/>
            </label>
            <p className="converter__show-result">Result:  
                <span>{roman ? roman : "none"}</span>
            </p>
        </section>
    );
}

export default RomanConverter