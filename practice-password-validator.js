const readline = require('readline-sync');

let myPassword = readline.question("Enter you Password"); //prompting user ofr password
//console.log(myPassword);

//check if the password entered is atleast * characters long
if (myPassword.length <= 8){
    console.log("The password must be at least 8 characters long.");// if not give a messasge to user
}
 let hasNumber = false;
 let hasUpperCase = false;

 //iterate through each character of password check for atleast one Number and Upeercase.

 for ( let i = 0; i < myPassword.length; i++){
     let char = myPassword [i];

 //checking if password has atleast one number.    
    if (char >= 0 && char <= 9){
        hasNumber = true;
    }

// checking if password has atleast one Uppercase character

    if (char >= 'A' && char<= 'Z'){
        hasUpperCase = true;
    }
}  // Letting user know if their password is valid or not   
    if (!hasNumber){
        console.log("Password needs atleast one number. Plaese enter another password.");
    }
    if (!hasUpperCase){
        console.log("Password needs atleast one Uppercase. Plaese enter another password.")
    }
    else{
        console.log("Password is valid");
    }
 
