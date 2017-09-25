// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj =new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({

    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Jens', 
    //     age: 25 , 
    //     location: 'Belgium'
    // }, (err,result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined,2));
    // });
    // db.collection('Todos').find({
    //     _id: new ObjectID('59c9694e4417c8e8e0a93484')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('Unable to fetch todos', err)
    // });
    db.collection('Users').find({name: 'Jens'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    },(err) =>{

    });
    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count: ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos', err)
    // });

    //db.close();

});