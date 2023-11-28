const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20;

// century20 should be: [1989, 2000, 1999, 1973]
// Write your code below


century20 = years.filter(year => {
  if ( year >= 2000){
    return true;
  }else {
    return false;
  }
});
                     
  console.log(century20);

