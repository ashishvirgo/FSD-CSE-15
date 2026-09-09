function register(cb){
    setTimeout(()=>{
console.log("Register here")
    cb();
    },10000)
    
}
function login(cb){
    setTimeout(()=>{
        console.log("login here")
        cb();
    },5000)
    
}
function getData(cb){
    setTimeout(()=>{
console.log("fetch data from DB");
     cb();
    },6000)
    
}
function displayData(){
    setTimeout(()=>{
      console.log("Displaty Data")
    },3000)
    
   
}
//callback hell problem
register(
    ()=>{
        login(
            ()=>{
               getData(
                ()=>{
                    displayData();
                }
               )
        });
    })

console.log("Call Another App")