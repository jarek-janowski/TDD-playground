const toRoman = (arabic) => {
    let roman = ""
        if(arabic < 1) { return roman = ""}
        if(arabic >= 1000){ return roman = "M" + toRoman(arabic - 1000)}
        if(arabic >= 900){ return roman = "CM" + toRoman(arabic - 900)}
        if(arabic >= 500){ return roman = "D" + toRoman(arabic - 500)}
        if(arabic >= 400){ return roman = "CD" + toRoman(arabic - 400)}
        if(arabic >= 100){ return roman = "C" + toRoman(arabic - 100)}
        if(arabic >= 90){ return roman = "XC" + toRoman(arabic - 90)}
        if(arabic >= 50){ return roman = "L" + toRoman(arabic - 50)}
        if(arabic >= 40){ return roman = "XL" + toRoman(arabic - 40)}
        if(arabic >= 10){ return roman = "X" + toRoman(arabic - 10)}
        if(arabic >= 9){ return roman = "IX" + toRoman(arabic - 9)}
        if(arabic >= 5){ return roman = "V" + toRoman(arabic - 5)}
        if(arabic >= 4){ return roman = "IV" + toRoman(arabic - 4)}
        if(arabic >= 1){ return roman = "I" + toRoman(arabic - 1)} 
    return roman
    }
export default toRoman