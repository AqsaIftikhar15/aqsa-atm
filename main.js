import inquirer from "inquirer";
let mybalance = 12000;
let myPin = 1505;
let pinAnswer = await inquirer.prompt([
    {
        name: "ques01",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.ques01 === myPin) {
    console.log("correct pin");
    let operationAns = await inquirer.prompt({
        name: "operation",
        message: "select anyone of the following",
        type: "list",
        choices: ["withdraw", "checkbalance"]
    });
    if (operationAns.operation === "withdraw") {
        let amountSelector = await inquirer.prompt([{ name: "amountselection",
                message: "what is your desired amount to withdraw?",
                type: "number", }]);
        if (amountSelector.amountselection === mybalance) {
            mybalance -= amountSelector.amountselection;
            console.log("balance of Rs/ " + mybalance + " is remaining in your account.");
        }
        else {
            console.log("invalid command");
        }
    }
    else if (operationAns.operation === "checkbalance") {
        console.log("your current balance is " + mybalance + ".");
    }
}
else {
    console.log("incorrect pin!");
}
