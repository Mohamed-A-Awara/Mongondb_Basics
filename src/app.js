const mongodb  = require('mongodb')
const mongodbClient = mongodb.MongoClient
const ConnentionUrl = 'mongodb://localhost:27017'
const db_Name = 'Task'

mongodbClient.connect(ConnentionUrl , (error , response)=>{
    if (error){
        return console.log('Connection Failed !')
    }
    console.log('Running....')

    const db = response.db(db_Name)

    // Operations
    // insertOne --> 2 persons
    db.collection('persons').insertOne({
        name : 'mohamed',
        age:20
    }).then((data)=>console.log(data.insertedId)).catch((error)=>console.log(error))

    db.collection('persons').insertOne({
        name : 'ayman',
        age:30
    }).then((data)=>console.log(data.insertedId)).catch((error)=>console.log(error))


    // // insertMany
    db.collection('persons').insertMany([
        {name : 'ali' , age: 20},
        {name : 'osama' , age: 21},
        {name : 'hany' , age: 27},
        {name : 'zeyad' , age: 27},
        {name : 'hefzy' , age: 27},
        {name : 'ahmed' , age: 23},
        {name : 'basel' , age: 27},
        {name : 'amira' , age: 27},
        {name : 'sara' , age: 25},
        {name : 'badry' , age: 29},
    ]).then((data)=> console.log(data.insertedCount)).catch((error)=>console.log(error))

    // find the same age 
    // db.collection('persons').find({age: 27}).toArray((error , users)=>{
    //     if (error){
    //         return console.log(error)
    //     }
    //     console.log(users)
    // })

    // find the first three persons age 27
    // db.collection('persons').find({age : 27}).limit(3).toArray((error , data)=>{
    //     if (error){
    //         return console.log(error)
    //     }
    //     console.log(data)
        
    // })

    // update the name of first 4 person

    // db.collection('persons').updateMany({
    //     _id:mongodb.ObjectId('657ed3e8d12590990930e999'),
    //     _id:mongodb.ObjectId('657ed3e8d12590990930e99a'),
    //     _id:mongodb.ObjectId('657ed3e8d12590990930e99b'),
    //     _id:mongodb.ObjectId('657ed3e8d12590990930e99c')
    // }, {
    //     $set : {name : 'awara'}
    //     $inc : {age : 4}    
    // }).then((data)=>console.log(data.modifiedCount)).catch((error)=>console.log(error))    
    
    // update all doc for age --> 10
    // db.collection('persons').updateMany({} , {
    //     $inc : {age : 10}
    // }).then((data)=>console.log(data.modifiedCount)).catch((error)=>console.log(error))

    // delete all doc for the same age 

    // db.collection('persons').deleteMany({age : 37}).then((data)=>console.log(data.deletedCount)).catch((error)=>console.log(error))
    
})


