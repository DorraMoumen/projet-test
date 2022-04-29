const express= require("express")
const connectdb=require("./BD/connectdb")
const users=require("./model/userModel")
const app=express()
const port=5000
const cors=require('cors')
const router = require("./routes/adminRoute")


// const path =require ("path");
const mongoose =require ("mongoose");
const multer = require("multer");//un package qui nous permet de gérer les fichiers entrants dans les requêtes HTTP
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;;//GridFS storage engine for Multer to store uploaded files directly to MongoDb.
// const bodyParser = require ('body-parser')




// app.use(bodyParser.json())



app.use(cors())
app.use(express.json())

 app.use('/api',router)

/****************************DATA BASE CONNECTION *********************************/
 const mongouri = 'mongodb+srv://dorramn:Sabrine123@cluster0.tc6fr.mongodb.net/mydb?retryWrites=true&w=majority';
 try {
   mongoose.connect(mongouri, {
     useUnifiedTopology: true,
     useNewUrlParser: true
   });
 } catch (error) {
   handleError(error);
 }
 process.on('unhandledRejection', error => {
   console.log('unhandledRejection', error.message);
 });
 
 //creating bucket
 let bucket;
 mongoose.connection.on("connected", () => {
   //var client = mongoose.connections[0].client;
   var db = mongoose.connections[0].db;
   bucket = new mongoose.mongo.GridFSBucket(db, {
     bucketName: "newBucket"
   });
   console.log(bucket);
 });
 
 app.use(express.urlencoded({
   extended: false
 }));
 
 const storage = new GridFsStorage({
   url: mongouri,
   file: (req, file) => {
     return new Promise((resolve, reject) => {
       const filename = file.originalname;
       const fileInfo = {
         filename: filename,
         bucketName: "newBucket"
       };
       resolve(fileInfo);
     });
   }
 });
 
 const upload = multer({
   storage
 });
 /************************* GET FILE BY NAME ***********************************/
 app.get("/fileinfo/:filename", (req, res) => {
   const file = bucket
     .find({
       filename: req.params.filename
     })
     .toArray((err, files) => {
       if (!files || files.length === 0) {
         return res.status(404)
           .json({
             err: "no files exist"
           });
       }
       bucket.openDownloadStreamByName(req.params.filename)
         .pipe(res);
         
     });
 });
 /*******************************************POST UPLOAD FILES***************************************/
 app.post("/upload", upload.single("file"), (req, res) => {
   res.status(200)
     .send("File uploaded successfully");
 });
 
 /******************************************** GET ALL FILES ***************************************/
 app.get("/allfiles", (req, res) => {
   const file = bucket
     .find()
     .toArray((err, files) => {
       if (!files || files.length === 0) {
         return res.status(404)
           .json({
             err: "no files exist"
           });
       }
       res.send(files)
     });
 });
   
/*************************************** GET ALL USERS *********************************************/

app.get("/allusers",async(req,res)=>{
    try {
       const data=await users.find().exec()
       res.status(200).send(data)
   } catch (error) {
       error? res.send('sth went wrong'):res.send('succeeded')
   }
})


/******************************************** GET USER BY EMAIL ************************************/



// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
//users.findOne({ 'Email': '' }, function (err, users) {
  //if (err) return handleError(err);
 
  //console.log('%s %s is a %s.', person.name.first, person.name.last,
    //person.occupation);
//});


      
  
app.listen(port,err=>err?console.log(err): console.log("server is running on port 5000"))


  

























































