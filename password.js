function checkPassword() {
    // capture the user input password element and 
        var passwordBoxObject = document.getElementById("password-box");
        console.dir(passwordBoxObject);
        var passwordEntered = passwordBoxObject.value
        console.log("User Entered Password", passwordEntered)
    // check if the password is correct
        var sitePassword = "noobmaster69"
        if (passwordEntered == sitePassword) {
            //allow navigation
            console.log("Allow!")
            window.location.assign("members.html")
        }
        else {
            //block navigation
            console.log("Block!")
            // add a new new style rule 
            document.getElementById("incorrect-password").style.color = "red";
            // add a text for incorrect password
            document.getElementById("incorrect-password").innerHTML = "Incorrect password, please try again...";
        }
    }