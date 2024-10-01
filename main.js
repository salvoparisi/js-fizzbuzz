//iniziamo il ciclo for
for (let i=1; i<=100; i++){
    //dividiamo la i per 3, se il resto è uguale a 0 vuol dire che è un multiplo 
    if(i % 3 == 0){
        if(i % 5 == 0){    //se sara pure multiplo di 5 scrivera "FizzBuzz"
            console.log("FizzBuzz");
        }else{            
            console.log("Fizz");
        }
    }else if (i % 5 == 0){      //stessa cosa per Buzz ma con i multipli di 5
        if(i % 3 == 0){
            console.log("FizzBuzz")
        }else{
            console.log("Buzz");
        }
    }else{          //se non sarà un muliplo di 3 o 5 scriverà semplicemente un numero
        console.log(i)
    }
}