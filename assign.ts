let TotalMarks = 850;
let obtainedMarks = 390;
let result = (obtainedMarks*100) / TotalMarks;

if(result >= 90 && result <= 100){
    console.log("you have Passed the examination with A-one Grade");
} else if (result >= 80 && result <= 89) {
    console.log("you have Passed the examination with A Grade");
} else if (result >= 70 && result <= 79){
    console.log("you have Passed the examination with B Grade");
} else if (result >= 60 && result <= 69){
    console.log("you have Passed the examination with c Grade");
} else if (result >= 50 && result <= 59){
    console.log("you have Passed the examination with D Grade");
} else if (result >= 40 && result <= 49){
    console.log("you have Passed the examination with E Grade");
} else if ( result <40){
   console.log("You are Fail");
} else { 
console.log("Congratulation, You have passed the Examination");
}
