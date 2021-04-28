//STEP 1
let getDaysInMonth = function(month,year) {
    
   return new Date(year, month, 0).getDate();
  };
console.log(getDaysInMonth(4, 2021));

//STEP 2
// let month_name = function(d){
//     mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       return mlist[d.getMonth()];
//     };
//     let m = month_name(new Date("5/30/2021"));
//     console.log(`Date = 5/30/2021 `);
//     console.log(`Month = ${m}`);

//STEP 3
// function check() {
//     let today = new Date();
//     if(today.getDay() == 6 || today.getDay() == 0)  {
//     console.log("Weekend!");
// }
// }
// check();



//STEP 4

// const today = new Date()
// const yesterday = new Date(today)

// yesterday.setDate(yesterday.getDate() - 1)

// console.log(`Today - ${today.toDateString()}`);
// console.log(`Yesterday - ${yesterday.toDateString()}`);

//STEP 5

// var dateObj = new Date()
// var weekday = dateObj.toLocaleString("default", { weekday: "short" })
// let firstCharacter = weekday.charAt(0);
// console.log(firstCharacter);




