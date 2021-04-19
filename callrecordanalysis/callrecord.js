let fs = require("fs");
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

//let CallData = JSON.parse(calldata)
//console.log(CallData)
    
mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=>{
    if(!err1){
        fs.readFile("call_data.json",(err,data)=>{
            if(!err){
                let empstring= data.toString();
                let empJson = JSON.parse(empstring);
                //console.log(empJson)
                let db=client.db("meanstack");
              db.collection("Data").insertMany(empJson,(err2,result)=>{
                  if(!err2){
                      console.log(result);
                  }else {
                      console.log(err2.message);
                  }
                  client.close();
              })
            }
        })
              
            }
        
       
    
})