
//---------------------WEB3 Config---------------------------

const web3 = new Web3("ws://127.0.0.1:7545");
const dwitter = new web3.eth.Contract(DwitterAbi, DwitterAddress);

let defaultAccount;

web3.eth.getAccounts()
    .then(
        accounts => defaultAccount=accounts[0]
        );

dwitter.defaultAccount = defaultAccount;
//---------------------WEB3 Config----------------------------


//---------------------Buttons Event Handling-----------------
const handleSignupClick = () => {
    handle_signup();
}
const signinBtn = document.getElementById("button_signup");
signinBtn.addEventListener("click",handleSignupClick);
//---------------------Buttons Event Handling------------------


//-----------------Handle signup------------------------------
const handle_signup = () => {
    
    const new_user_address = document.getElementById("input_address").value;
    const new_user_name = document.getElementById("input_name").value;
    const new_user_pin = document.getElementById("input_pin").value;

    const options = {
        from: new_user_address,
        gas: "3000000",
        gasPrice: "1000000"
    };

    dwitter
        .methods.signUp(new_user_name, new_user_pin).send(options)
        .on("receipt",
            function (receipt) {
                console.log(receipt);
            })
            .on("error",
                    function (error, receipt) {
                        document.getElementById("registration_event").innerHTML = "User Already Registered";
                    }
            ).then(document.getElementById("registration_event").innerHTML = new_user_address);
}
//-----------------Handle signup------------------------------


// dwitter
// .methods.verifyAccount().send({
//     from: "0xEa7367D56eE73b1d5f3fAe9607395157254F2038",
//     gas: "3000000",
//     gasPrice: "1000000"
// })
// .then(console.log);



// dwitter
// .methods.follow("0xb97C25D4AB834DAf9f19C3521A243e75d0aFf29A").send({
//     from: "0xe107A1dC633465043211b9c6E12c9fd5a5859659",
//     gas: "3000000",
//     gasPrice: "1000000"
// })
// .then(console.log);

// dwitter
// .methods.likeTweets("0xb97C25D4AB834DAf9f19C3521A243e75d0aFf29A").send({
//     from: "0xe107A1dC633465043211b9c6E12c9fd5a5859659",
//     gas: "3000000",
//     gasPrice: "1000000"
// })
// .then(console.log);

// dwitter
// .methods.reTweets("0xb97C25D4AB834DAf9f19C3521A243e75d0aFf29A","1").send({
//     from: "0xe107A1dC633465043211b9c6E12c9fd5a5859659",
//     gas: "3000000",
//     gasPrice: "1000000"
// })
// .then(console.log);

// dwitter
// .methods
// .showReTweets("0xb97C25D4AB834DAf9f19C3521A243e75d0aFf29A")
// .call().then(console.log);

// dwitter
// .methods
// .showLikes("0xb97C25D4AB834DAf9f19C3521A243e75d0aFf29A")
// .call().then(console.log);