// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
console.log(ObjectID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('unable to connect mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c3c830c32b241af9d1a04b9')
  // },{
  //   $set : {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    name: 'Vinitha'
  }, {
    $set : {
      name : 'Shireesh'
    },
    $inc : {

        age : 1

    }
  }, {
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  });
  //db.close();
});
