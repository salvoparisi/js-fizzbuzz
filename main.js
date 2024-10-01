//iniziamo il ciclo for
for (let i=1; i<=100; i++){
    //dividiamo la i per 3, se il resto è uguale a 0 vuol dire che è un multiplo 
    if(i % 3 == 0){
        //stampiamo Fizz
        console.log("Fizz");
    }else if (i % 5 == 0){      //stessa cosa per Buzz ma con i multipli di 5
        console.log("Buzz");
    }else{
        //se la i non è ne multiplo di 3 ne multiplo di 5, stampa direttamente il numero
        console.log(i);
        
    }
}