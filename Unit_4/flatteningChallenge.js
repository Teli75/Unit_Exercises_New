const customerNames = [
    [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
    [ "Barry", "Wanda", "Jamal", "Hayden" ],
    [ "Portia", "Pam", "Philip" ]
];
let flattenedCustomerNames;

// flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
// Write your code below

flattenedCustomerNames = customerNames
    .reduce((bigArr, eachArr) => 
    [...bigArr,...eachArr]    , []);

    console.log(flattenedCustomerNames);