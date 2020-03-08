const inquirer = require("inquirer");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}|:<>?-=[]\;,./";

const questions = [{
    type: "number",
    message: "Length of password(between 8 - 128):",
    name:  "passwordLength",
    validate: function(value) {
        if (value < 8 || value > 128){
            return 'Requested password length not within guidelines!'
        }
        return true;
    }
}
},
{
    type: "checkbox",
    message:  "Please check boxes of characters you want included  in your password.  You must select at least one",
    name: "choices",
    choices: [
        {
            name: "Uppercase letters",
        }, 
        {
            name: "Lowercase letters",
        }
        {
            name: "Numbers",
        }
        {
            name: "Special characters",
        }
    ],
    validate: function(answer) {
        if answer.length <1) {
            return 'You must select at least one element to construct the password!';
        }
        return true;
    }
}
];

class Password {
    constructor (passwordLength, types){
        let password = "";
        let choiceOptions = "";
        console.log(`types: 4{types}`);

        if (types.includes("U"))
    }
}
