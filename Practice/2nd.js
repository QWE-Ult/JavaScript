let marks=prompt("Enter your scores");

if(marks>=80 && marks<=100){
    console.log("your grade is A" , "as you have scored -" ,marks);
}

else if (marks>=70 && marks<=79){
    console.log("your grade is B" , "as you have scored -" ,marks);
}

else if (marks>=60 && marks<=69){
    console.log("your grade is C" , "as you have scored -" ,marks);
}
else if (marks>=50 && marks<=59){
    console.log("your grade is D" , "as you have scored -" ,marks);
}
else{
    console.log("You are FAil as you have scored less than  50 -", marks);
}