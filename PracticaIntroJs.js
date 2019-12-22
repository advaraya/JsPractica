function GlobalEjercicio(myNumber){
function isDivisible(myNumber, theOtherNumber){
    let rest= myNumber % theOtherNumber;
    if(rest===0){
      return true;
    }
    else{
      return false;
    }
  }

    var saving='';
if (isDivisible(myNumber,3)){
    saving +='Foo';
}

if (isDivisible(myNumber,5)){
    saving += 'Bar';
}

if (isDivisible(myNumber,7)){
    saving += 'Quix';
}

if (myNumber.toString().includes(3)){
    saving +='Foo';
}
if (myNumber.toString().includes(5)){
    saving +='Bar';
}
if (myNumber.toString().includes(7)){
    saving +='Quix';
}

if (saving !=''){
    return saving;
}
else { 
    return myNumber;
}
}

let myExampleNumber = 62;

for (x=1; x <= myExampleNumber; x++){
    console.log(GlobalEjercicio(x));
}

