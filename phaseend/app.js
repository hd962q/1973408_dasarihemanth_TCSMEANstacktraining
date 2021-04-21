let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


io.on("connection",(socket)=>{
    console.log("client connected to application")
    socket.on("message",(msg)=>{
      mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
            if(!err1){
               let db = client.db("meanstack");
                    db.collection("Chatlog").insertOne({name:msg.text1,Message:msg.msg1},(err2,result)=>{
                        if(!err2){
                            console.log(result.insertedCount);
                        }else {
                            console.log(err2.message);
                       
                        }  
                         
                    });
                   
                 
                }
                        

    })
});
   // res.sendFile(__dirname+"/index.html")
})



http.listen(9090,()=>console.log("server is running on the port number 9090"))