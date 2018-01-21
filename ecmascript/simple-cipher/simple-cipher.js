class Cipher {
    constructor(key) {
        if (key === '') { 
            //error if argument provided is empty string
            throw ('Bad key');
        }
        
        if (key && (key.toUpperCase() === key || /^\d+$/.test(key))) { 
           throw ('Bad key');
        }

        this.key = key || Math.random().toString(36).substring(3).replace(/[^a-zA-Z]+/g, "");
    }

    decode(encoded) {
        return aux(this.key, encoded, -1);
    }

    encode(cleanText) {
        return aux(this.key, cleanText, 1);
    }

    aux(key, text, sign) {
        return text.split('').reduce(function(outText, letter, ii){

            let offset = sign * alpha.indexOf(key.charAt(mod(ii, key.length)));
            
            outText += alpha.charAt(mod(alpha.indexOf(letter)+offset ,alpha.length));
        
            return outText;
        
        }, "");
    }

    mod(n, m) {
        return ((n % m) + m) % m;
    }
}

export default Cipher;