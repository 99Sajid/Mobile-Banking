const pin=3333;
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