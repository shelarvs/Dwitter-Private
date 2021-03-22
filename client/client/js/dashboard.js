  
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
var tweetAddress;
var account = [];
var i;
var output = '';
var count=0;


    dwitter
    .methods.showAccount().call({
        from: userAddress,
        gas: "3000000",
        gasPrice: "1000000"
    })
    .then(
        (data)=>{
 
            for(i=0;i<data.length;i++)
            {

                dwitter.methods.showTweets(data[i]).call({
                    from: userAddress,
                    gas: "3000000",
                    gasPrice: "1000000"
                })
                .then(
                    (data1)=>{
                        //document.getElementById("show_tweets").innerHTML +=data[count]+":" + data1[0];
                        
                        output += `<div class="card mb-2" id =${data[count]}>
                        <div class="card-body p-2 p-sm-3">
                            <div class="media forum-item">
                                <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                                <div class="media-body">
                                    <h6>${data[count]}</h6>
                                    <p class="text-secondary">
                                        ${data1}
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>    `;
                       
                        document.getElementById("show_tweets").innerHTML = output;
                        count++;
                        
                }
                );	

            }
            
        }
    );



