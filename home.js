document.getElementById("login-btn").addEventListener('click',function(e){
    e.preventDefault()
    // console.log("is working!");
    const bank=document.getElementById('add-bank').value ;
    const accountNumber=document.getElementById('add-account-number').value ;
    const ammount=parseInt(document.getElementById('add-ammount').value) ;
    const pin=document.getElementById('add-pin').value ;
    // console.log(bank,accountNumber,ammount,pin);
    const availabeMoney=parseInt(document.getElementById('availabe-money').innerText);

    // console.log(availabeMoney);
    const totalMoney=ammount+availabeMoney;

    document.getElementById('availabe-money').innerText=totalMoney;

})