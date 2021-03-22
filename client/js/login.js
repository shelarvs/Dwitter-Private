
// //-----------------user login------------------------------
let logData;
const loginBtn = document.getElementById("button_login");
// //-----------------user login------------------------------



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
const handleLoginClick = () => {
    handle_login();
}

loginBtn.addEventListener("click",handleLoginClick);

//---------------------Buttons Event Handling------------------


//-----------------Handle Login------------------------------
const handle_login=()=>{

    const userAddress = document.getElementById("userAddress").value;
    const pin = document.getElementById("pin").value;

    dwitter
        .methods.signIn(pin).send({
            from: userAddress,
            gas: "3000000",
            gasPrice: "1000000"
        }).on("receipt",
        function (receipt) {
            console.log("Login In Success:",userAddress);
            logData = userAddress;
            sessionStorage.clear();
            sessionStorage.setItem("logs", userAddress);
            setTimeout(function(){ 
                window.location.replace("./dashboard.html");              
             }, 3000);
            
        })
        .on("error",
                function (error, receipt) {
                    console.log(error,receipt);
                }
        );
}
//-----------------Handle Login------------------------------