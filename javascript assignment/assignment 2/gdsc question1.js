function detectword(word){
    hiddingword= " ";
    for (i=0;i<word.length;i++){
        if (islowercase(word[i])){
            hiddingword += word[i];
        }
    }
    return hiddingword;
}
function islowercase(str){
    return str ===str.toLowerCase() && str !== str.toUpperCase();
}
console.log(detectword("fyhfA"));