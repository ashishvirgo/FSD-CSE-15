function register(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
     console.log("Register here")
     resolve();
    },10000)
    })
    
    
}
function login(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("login here")
        reject("login failed");
    },5000) 
    })
    
    
}
function getData(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("fetch data from DB");
     resolve();
    },6000)
    })   
}
function displayData(){
    setTimeout(()=>{
      console.log("Displaty Data")
    },3000)
    
   
}

// register()
// .then(login)
// .then(getData)
// .then(displayData)
//     .catch((err)=>{
//      console.log("Error:",err)
//     })      
async function test(){
    try{
      await register();
      await login();
      await getData();
       displayData();
    }
    catch(err){
        console.log("Error:",err)
    }
 }
 test();
console.log("Call Another App")