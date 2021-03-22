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
const handleSearch = () => {
    handle_search();
}
const searchBtn = document.getElementById("btn_search");
searchBtn.addEventListener("click",handleSearch);
//---------------------Buttons Event Handling------------------

const handle_search = () => {
    var userAddress = document.getElementById("userAddressData").value;

    sessionStorage.setItem("search", userAddress);
    console.log(userAddress);
    window.location.replace("./searchResult.html");
}   