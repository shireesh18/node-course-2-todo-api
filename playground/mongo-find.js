// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
console.log(ObjectID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('unable to connect mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find({_id:new ObjectID('5c3a5de132b241af9d1a04b0')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // })
  db.collection('Users').find({name:'Shireesh'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined,2));
  }, (err) => {
    console.log('unable to fetch todos', err);
  });
  db.close();
});
