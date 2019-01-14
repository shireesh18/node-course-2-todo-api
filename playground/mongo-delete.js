// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
console.log(ObjectID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('unable to connect mongodb server');
  }
  console.log('Connected to mongodb server');
  //deleteMany
  db.collection('Users').deleteMany({name:'Shireesh'}).then((result) => {
    console.log(result);
  });

  //deleteOne

  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5c3a647e32b241af9d1a04b1')}).then((result) => {
    console.log(result);
  });

  //db.close();
});
