// first name and last name can drive and how long they've driven. If they are too young, log a countdown from 5.


function passingAge(firstName, lastName, age, distance) {
  if (age < 16){
    return "you are too young";
  }
  else{
       return `${firstName}  ${lastName} can drive, You have driven ${distance}`;
    }
  }



console.log(passingAge("Swati", "Dash", "11", "4 miles"));
