var batarPrice = 50;
var benanaPrice = 40;
var chanacurPrice = 10;
var myBudget = 100;
var batarWellPack = true;

if(batarPrice < myBudget){
    if(batarWellPack == true){
        console.log("batarbon diya ca khabo");
    }
    else{
        console.log("batar agune fry kore khabo");
    }
}
else if(benanaPrice < myBudget){
    console.log("taile benana with batar khabo");
}
else if(chanacurPrice < myBudget){
    console.log("tahole chanacur muri khabo");
}
else{
    console.log("batasa diye ca khabo");
}