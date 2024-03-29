

const mongodb = require(`mongodb`)
const mongoClient = mongodb.MongoClient
const connectionUrl = `mongodb://127.0.0.1:27017`
const dbname ="project1"
mongoClient.connect( connectionUrl , (error, res1) =>{
    if (error) {
        return console.log(`error has occured`)
    }
    console.log(`All Perf`)
    const db = res1.db(dbname)
    ///////////////////////////////////////////////////
    db.collection('users').insertOne({
        name :`islam`,
        age : 26
    },(error , data) =>{
        if (error) {
           console.log(`Unable to insert data`) 
        }
        console.log(data.insertedId)
    })
///////////////////////////////////////////////////
db.collection('users').insertMany([
    {
    name :`islam`,
    age : 26
   },
   {
    name :`asmaa`,
    age : 24
   },
   {
    name :`ebrahiem`,
    age : 36
   },
   {
    name :`ahmed`,
    age : 24
   },
   {
    name :`reem`,
    age : 28
   }
] ,
(error , data) =>{
    if (error) {
       console.log(`Unable to insert data`) 
    }
    console.log(data.insertedCount)
})
/////////////////////////////////////////
db.collection('users').findOne({_id:mongodb.ObjectId("6605c70922bbc96f3da4625b")}
,(error ,user ) =>{
    if (error) {
       console.log(`Unable to insert data`) 
    }
    console.log(user)
})
///////////////////////////////////////

db.collection(`users`).find({age : 24}).toArray((error , users) =>{
    if (error) {
        return console.log(` error has occured`)
    }
    console.log(users)
})
/////////////////////////////////////////////////
db.collection(`users`).find({age : 24}).count((error , users) =>{
    if (error) {
        return console.log(` error has occured`)
    }
    console.log(users)
})

})














