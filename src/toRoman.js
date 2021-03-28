const toRoman = (arabic) => {
    let roman = ""
        if(arabic < 1) { return roman = ""}
        if(arabic >= 40){ return roman = "XL" + toRoman(arabic - 40)}
        if(arabic >= 10){ return roman = "X" + toRoman(arabic - 10)}
        if(arabic >= 9){ return roman = "IX" + toRoman(arabic - 9)}
        if(arabic >= 5){ return roman = "V" + toRoman(arabic - 5)}
        if(arabic >= 4){ return roman = "IV" + toRoman(arabic - 4)}
        if(arabic >= 1){ return roman = "I" + toRoman(arabic - 1)} 
    return roman
    }
export default toRoman