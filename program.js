var year = window.prompt("Enter a year to check leapyear or not: ");

if ((year%400==0) || (year%100!=0 && year % 4 == 0)){
    console.log("entered year is leap year: ",year);
}
else{
    console.log("Entered year is Not a Leap year")
}