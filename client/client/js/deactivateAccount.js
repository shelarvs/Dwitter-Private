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

userAddress = sessionStorage.getItem("logs");

const options = {
    from: userAddress,
    gas: "3000000",
    gasPrice: "1000000"
};

dwitter
.methods.changeAccountStatus().send(options)
.then(
    document.getElementById("event").innerHTML = "Account Status Changed :" +userAddress,
    setTimeout(function(){
        window.location.replace("./dashboard.html");
     }, 5000)
);