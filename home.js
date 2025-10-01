const pin=3333;

// add money feature
document.getElementById("login-btn").addEventListener('click',function(e){
    e.preventDefault()
    // console.log("is working!");
    const bank=document.getElementById('add-bank').value ;
    const accountNumber=document.getElementById('add-account-number').value ;
    const ammount=parseInt(document.getElementById('add-ammount').value) ;
    const userPin=parseInt(document.getElementById('add-pin').value) ;
    // console.log(bank,accountNumber,ammount,pin);
    const availabeMoney=parseInt(document.getElementById('availabe-money').innerText);
    
    if(accountNumber.length!=11){
        alert("please provide valid account Number");
        return;
    }
    if(pin!==userPin ){
        alert("Please provide valid pin number");
        return;
    }
    // console.log(availabeMoney);
    const totalMoney=ammount+availabeMoney;

    document.getElementById('availabe-money').innerText=totalMoney;

})

//cashout feature
document.getElementById('out-login-btn').addEventListener('click',function(e){
    e.preventDefault()
    //console.log("its working!")
    const mobileNumber=document.getElementById("out-number").value ;
    const cashoutAmount=parseInt(document.getElementById('out-ammount').value) ;
    const userPin=parseInt(document.getElementById('out-pin').value) ;
    const availabeMoney=parseInt(document.getElementById('availabe-money').innerText);


    if(mobileNumber.length!=11){
        alert("please provide valid account Number");
        return;
    }
    if(pin!==userPin ){
        alert("Please provide valid pin number");
        return;
    }
    if(availabeMoney-cashoutAmount<0){
        alert("Insufficient balance");
        return;
    }
    const totalMoney=availabeMoney-cashoutAmount;

    document.getElementById('availabe-money').innerText=totalMoney;
})

//Transfer Money section

document.getElementById('transfer-login-btn').addEventListener('click',function(e){
    e.preventDefault()
    const transferAccountNumber=document.getElementById("transfer-number").value ;
    const transferAmount=parseInt(document.getElementById('transfer-ammount').value) ;
    const userPin=parseInt(document.getElementById('transfer-pin').value) ;
    const availabeMoney=parseInt(document.getElementById('availabe-money').innerText);


    if(transferAccountNumber.length!=11){
        alert("please provide valid account Number");
        return;
    }
    if(pin!==userPin ){
        alert("Please provide valid pin number");
        return;
    }
    if(availabeMoney-transferAmount<0){
        alert("Insufficient fund!");
        return;
    }
    const totalMoney=availabeMoney-transferAmount;

    document.getElementById('availabe-money').innerText=totalMoney;

})

// toggle feature 

document.getElementById("add-btn").addEventListener('click',function(){
    document.getElementById('cashout-perent').style.display="none"
    document.getElementById('add-perent').style.display="block"
    document.getElementById('transfer-perent').style.display="none"

})
document.getElementById("cashout-btn").addEventListener('click',function(){
    document.getElementById('add-perent').style.display="none";
    document.getElementById('cashout-perent').style.display="block";
    document.getElementById('transfer-perent').style.display="none"
    

})
document.getElementById("transfer-btn").addEventListener('click',function(){
    document.getElementById('cashout-perent').style.display="none"
    document.getElementById('add-perent').style.display="none"
    document.getElementById('transfer-perent').style.display="block"

})