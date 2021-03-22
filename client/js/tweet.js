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


const dweetBtn = document.getElementById("button_tweet");


//---------------------Buttons Event Handling-----------------
const handleDweetClick = () => {
    handle_Dweet();
}

dweetBtn.addEventListener("click",handleDweetClick);

//---------------------Buttons Event Handling------------------
userAddress = sessionStorage.getItem("logs");
const handle_Dweet=()=>{

    const dweet = document.getElementById("tweet").value;
    const hashtag = document.getElementById("hashtag").value;

dwitter
.methods.tweet(dweet, hashtag).send({
    from: userAddress,
    gas: "3000000",
    gasPrice: "1000000"
})
.then(console.log);
}