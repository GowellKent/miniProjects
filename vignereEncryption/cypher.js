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

    for(let i = 0; i< cipherText.length; i++){
        let x = (cipherText[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
        x += 'A'.charCodeAt(0);

        plainText += String.fromCharCode(x);
    }
    return plainText;
}

function ubahEnc(){
    let key = document.getElementById("keyword").value;
        plain = document.getElementById("plain").value;
        keyword = key.toUpperCase();
        plainText = plain.toUpperCase();
        encKey = buatKey(plainText, keyword);
        hasil = enkripsi(plainText, encKey);

    console.log(encKey);
    console.log(hasil);

    document.getElementById("encrypted").innerHTML = hasil;
}

function ubahDec(){
    let key = document.getElementById("keyword").value;
        cipher = document.getElementById("plain").value;
        keyword = key.toUpperCase();
        cipherText = cipher.toUpperCase();
        encKey = buatKey(cipherText, keyword);
        hasil = dekripsi(cipherText, encKey);
        
    console.log(encKey);
    console.log(hasil);

    document.getElementById("encrypted").innerHTML = hasil;
}
