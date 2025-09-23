// console.log("script added");
document.getElementById('login-btn')
 .addEventListener('click',function(e) {
    e.preventDefault();
    const MobileNumber = 1763677065 ;
    const PinNumber =32627;
    const mobilenumberValue=document.getElementById('Mobile-number').value;
    const pinnumberValue=document.getElementById('Pin-number').value;
    const mobilenumberValueConverted=parseInt(mobilenumberValue);
    const pinnumberValueConverted=parseInt(pinnumberValue);
   //  console.log(mobilenumberValueConverted)
   //  console.log(pinnumberValueConverted);
   //  check condition

   if(MobileNumber===mobilenumberValueConverted && PinNumber==pinnumberValueConverted){
      // console.log("all values mached");
      window.open('./Home.html','_blank');

   }else{
      // console.log("Invalid credentials");
      alert("Invalid credentials");
   }
 })