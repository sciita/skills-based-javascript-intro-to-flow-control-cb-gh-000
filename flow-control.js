function basicTeenager(age) {
  if (age>=13 && age <=19){
    console.log("You are a teenager!");
  }
}

function teenager(age) {
  if (age>=13 && age <=19){
    console.log("You are a teenager!");
  }
  else {
    console.log('You are not a teenager!');
  }
}

function ageChecker(age) {
  if (age>=13 && age <=19){
    console.log("You are a teenager!");
  }
  else if (age>=20){
    console.log("You are a grownup");
  }
  else if (age<=12){
    console.log('You are a kid');
  }
}

function ternaryTeenager(age) {
  return age(age>=13 && age <=19) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age) {
    case 13: console.log("You are a teenager");
    break;
    case 14: console.log("You are a teenager");
    break;
    case 15: console.log("You are a teenager");
    break;
    case 16: console.log("You are a teenager");
    break;
    case 17: console.log("You are a teenager");
    break;
    case 18: console.log("You are a teenager");
    break;
    case 19: console.log("You are a teenager");
    break;
    default: return "You have an age"
  }
}
