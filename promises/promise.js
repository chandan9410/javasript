//  we get directly promise as objects 
//he Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.
  const promiseone = new Promise(function(resolve , reject){ 
   console.log("async task  is completed");
   resolve();
  }, 1000)
  promiseone.then(function(){
     console.log("promise is  conjumed")
  })
  const promisethree = new Promise(function(resolve , reject){ 
    console.log("async task  is completed");
    resolve({username : "koranga", email : "Koranga77095@gmail.com"});
   }, 1000)
   promisethree.then(function(user){
      console.log(user)
   })
  // so   on
  