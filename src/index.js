const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    var vernem="";
    while(expr.length!=0)
    {
        tempV=expr.slice(0,10);
        expr=expr.substring(10);
        if(tempV=="**********")
        {
            vernem+=" ";
        }
        else
        {
            vernem+=toMors(tempV);
        }
    }
    return vernem;
}

function toMors(numC)
{
    var converted="";
    while(numC.length!=0)
    {
        tempV=numC.slice(0,2);
        numC=numC.substring(2);
        if(tempV=="10")
        {
            converted+=".";
        }
        else if(tempV=="11")
        {
            converted+="-";
        }
    }
    converted=MORSE_TABLE[converted];
    return converted;
}
module.exports = {
    decode
}