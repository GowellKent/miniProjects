function buatKey(str, key){
    key = key.split("");
    if(str.length == key.length){
        return key.join("");
    } else{
        let temp = key.length;
        for(let i = 0; i < (str.length - temp); i++){
            key.push(key[i % key.length])
        }
    }
    return key.join("");
}

function enkripsi(str, key){
    let cipherText = "";

    for(let i = 0; i < str.length; i++){
        let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;
        x += 'A'.charCodeAt(0);
        
        cipherText += String.fromCharCode(x);
    }
    return cipherText;
}

function dekripsi(cipherText, key){
    let plainText = "";

    for(let i = 0; i< cipherText.lengt; i++){
        let x = (cipherText[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
        x += 'A'.charCodeAt(0);

        plainText += String.fromCharCode(x);
    }
    return plainText;
}
