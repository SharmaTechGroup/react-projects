var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var conString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/register-user", (req, res)=>{

      var user = {
           UserId: req.body.UserId, 
           UserName: req.body.UserName,
           Password: req.body.Password,
           Email:req.body.Email, 
           Mobile: req.body.Mobile
      }

      mongoClient.connect(conString).then(clientObject=>{
            var database = clientObject.db("todo");
            database.collection("users").insertOne(user).then(()=>{
                  console.log("User Registered");
                  res.end();
            });
      });

});

app.get("/users", (req, res)=>{

     mongoClient.connect(conString).then(clientObj=>{
         var database = clientObj.db("todo");
         database.collection("users").find({}).toArray().then(documents=>{

              res.send(documents);
              res.end();

         })
     })
});

app.post("/add-appointment", (req, res)=>{

     var appointment = {
          AppointmentId : parseInt(req.body.AppointmentId),
          Title : req.body.Title, 
          Description: req.body.Description,
          Date: new Date(req.body.Date),
          UserId: req.body.UserId
     }

     mongoClient.connect(conString).then(clientObj=>{
           var database = clientObj.db("todo");
           database.collection("appointments").insertOne(appointment).then(()=>{
               console.log("Appointment Addedd..");
               res.end();
           })
     })
});

app.get("/get-appointments/:userid", (req, res)=>{

      mongoClient.connect(conString).then(clientObj=>{

            var database = clientObj.db("todo");

            database.collection("appointments").find({UserId:req.params.userid}).toArray().then(documents=>{
                 res.send(documents);
                 res.end();
            })
      })
});

app.get("/get-appointment/:id", (req, res)=>{

    mongoClient.connect(conString).then(clientObj=>{

          var database = clientObj.db("todo");

          database.collection("appointments").find({AppointmentId:parseInt(req.params.id)}).toArray().then(documents=>{
               res.send(documents);
               res.end();
          })
    })
});

app.put("/edit-appointment/:id", (req, res)=>{

    var id = parseInt(req.params.id);

    var appointment = {
        AppointmentId : parseInt(req.body.AppointmentId),
        Title : req.body.Title, 
        Description: req.body.Description,
        Date: new Date(req.body.Date),
        UserId: req.body.UserId
   }

   mongoClient.connect(conString).then(clientObj=>{
          var database = clientObj.db("todo");
          database.collection("appointments").updateOne({AppointmentId:id},{$set:appointment}).then(()=>{
             console.log("Appointment Updated..");
             res.end();
          })
   })

});

app.delete("/delete-appointment/:id", (req, res)=>{
     var id = parseInt(req.params.id);

     mongoClient.connect(conString).then(clientObj=>{
         var database = clientObj.db("todo");
         database.collection("appointments").deleteOne({AppointmentId:id}).then(()=>{

            console.log("Appointment Deleted");
            res.end();

         })
     })
});


app.listen(4040);
console.log(`Server Started http://127.0.0.1:4040`);

