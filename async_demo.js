function register(){
    setTimeout(()=>{
console.log("Register here")
    },10000)
    
}
function login(){
    setTimeout(()=>{
        console.log("login here")
    },5000)
    
}
function getData(){
    setTimeout(()=>{
console.log("fetch data from DB")
    },6000)
    
}
function displayData(){
    setTimeout(()=>{
      console.log("Displaty Data")
    },3000)
    
   
}

register();
login();
getData();
displayData();
console.log("Call Another App")