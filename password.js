const inquirer = require("inquirer");

//const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//const symbols = "!@#$%^&*()_+{}|:<>?-=[]\;,./";
const symbols = ["!", "@", "#", "$", "%", "^"];

const questions = [{
    type: "number",
    message: "Length of password(between 8 - 128):",
    name: "passwordLength",
    validate: function (value) {
        if (value < 8 || value > 128) {
            return 'Requested password length not within guidelines!'
        }
        return true;
    }
},

{
    type: "checkbox",
    message: "Please check boxes of characters you want included  in your password.  You must select at least one",
    name: "choices",
    choices: [
        {
            name: "Uppercase letters",
        },
        {
            name: "Lowercase letters",
        },
        {
            name: "Numbers",
        },
        {
            name: "Special characters",
        }
    ],
    validate: function (answer) {
        if (answer.length < 1) {
            return 'You must select at least one element to construct the password!';
        }
        return true;
    }
}
];

class Password {
    constructor(passwordLength, types, p) {
        let password = [];
        let choiceOptions = [];
        this.p = p;
        //if (types.includes("upperCase")){
        if (types.includes("U")) {
            //choiceOptions+=upperCase;
            choiceOptions = choiceOptions.concat(upperCase);
        }
        //if (types.includes("lowerCase")){
        if (types.includes("L")) {
            //choiceOptions+=lowerCase;
            choiceOptions = choiceOptions.concat(lowerCase);
        }
        //if (types.includes("numbers")){
        if (types.includes("N")) {
            //choiceOptions+=numbers;
            choiceOptions = choiceOptions.concat(numbers);
        }
        //if (types.includes("symbols")){
        if (types.includes("S")) {
            //choicesOptions+=symbols;
            choiceOptions = choiceOptions.concat(symbols);
        }
        console.log(choiceOptions);
        for (let i = 0; i < passwordLength; i++) {
            var temp = Math.floor(Math.random() * (choiceOptions.length));
            //console.log(choiceOptions[temp]);
            password.push(choiceOptions[temp]);
            //console.log("Password For Loop: "+password)
        }
        const pwd = password.join("");
        this.p = pwd;
        //console.log("PWD: " + pwd);
        //console.log("Password constructor: "+password);
        //this.generatedPassword = password;
        return p;
    }
}
inquirer
    .prompt(questions).then((data) => {
        //console.log("Data: "+JSON.stringify(data));
        //const {passwordLength, choices} = data;
        const passwordLength = data.passwordLength;
        const choices = data.choices;
        let p = "";
        const password = new Password(passwordLength, choices.map((word) => word[0]), p);
        console.log("Password Obj: " + JSON.stringify(password));
        console.log(`Your new password is: ${password.p}`);
        //console.log(`Your new password is: ${password}`);
    });
