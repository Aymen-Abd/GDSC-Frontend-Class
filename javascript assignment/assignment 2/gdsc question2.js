function divisor3(low,high){
    for(i=low;i<=high;i++){
        if (i%3==0){
            console.log (i + "div3");
        } 
        else {
            console.log(i);
        }  
    }
}

divisor3(4,6);