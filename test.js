var mongo = require('./mongo-handler')('mongodb://localhost:27017/mongo-handler-test');

setTimeout(function() {
  /**mongo.insertDocument('test', { "name" : "cam" }, function(docs) {
    console.log(docs.result);
    mongo.updateDocument('test', { "name" : "cam" }, { "name" : "john" }, function(docs) {
      console.log(docs.result);
      mongo.findDocuments('test', { "name" : "john" }, function(docs) {
        console.log(docs);
        mongo.deleteDocument('test', { "name" : "john" }, function(docs) {
          console.log(docs.result);
        });
      });
    });
  });**/

  /**mongo.findAndSort('test', {}, {val:-1}, function(docs) {
    console.log(docs);
  });**/

  mongo.updateDocument('test', { name : 'Bob' }, { lastName : 'Jamestone' }, function(result) {
    console.log('updated');
  });

}, 100);
