//---------------------WEB3 Config---------------------------


const web3 = new Web3("ws://127.0.0.1:7545");
const dwitter = new web3.eth.Contract(DwitterAbi, DwitterAddress);

let defaultAccount;

web3.eth.getAccounts()
    .then(
        accounts => defaultAccount=accounts[0]
        );

dwitter.defaultAccount = defaultAccount;

userAddress = sessionStorage.getItem("logs")


//---------------------WEB3 Config----------------------------
const options = {
    from: userAddress,
    gas: "3000000",
    gasPrice: "1000000"
};

dwitter
    .methods
    .viewUserProfile()
    .call(options).then( 
        (data)=>{
            document.getElementById("userAddress").innerHTML = "User Address: "+data[0];
            document.getElementById("name").innerHTML = "Name: "+data[1];
            document.getElementById("acc_verify").innerHTML = "Account Verified: "+data[2];
            document.getElementById("followers").innerHTML = "Followers: "+data[3];
            document.getElementById("following").innerHTML = "Following: "+data[4];
        }
    );