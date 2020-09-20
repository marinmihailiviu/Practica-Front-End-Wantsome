const onInputChange = () => {
    //get userWelcome element

    //get userName element

    const userWelcomeE1 = document.getElementById("userWelcome");
    const userNameE1 = document.querySelector("#userName");

    userWelcomeE1.textContent = `Welcome ${userNameE1.value}`; 
}

const onLogOut = () => {
    const userWelcomeE1 = document.getElementById("userWelcome");
    userWelcomeE1.textContent = "Welcome Anonymus";
}