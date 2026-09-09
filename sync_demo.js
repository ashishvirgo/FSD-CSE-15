function register(){
    waitfordelay(10000);
    console.log("Register here")
}
function login(){
    waitfordelay(5000);
    console.log("login here")
}
function getData(){
    waitfordelay(6000);
    console.log("fetch data from DB")
}
function displayData(){
    waitfordelay(3000);
    console.log("Displaty Data")
}
function waitfordelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt){
        
    }
}
register();
login();
getData();
displayData();
console.log("Call Another App")