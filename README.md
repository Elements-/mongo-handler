<h3><strong>mongo-handler</strong>, a simple MongoDB wrapper module</h3>
<hr>
<h6>Examples</h6>
```javascript
// place this line at the top of your file, make sure to pass the db url like so:
// 'mongodb://host:port/collection'
var mongo = require('mongo-handler')('mongodb://localhost:27017/mongo-handler-test');

// insert
mongo.insertDocument('collectionName', { "name" : "John Doe" }, function(result) {
  console.log('Inserted Document');
});

// find (docs is an array of documents)
mongo.findDocuments('collectionName', {}, function(docs) {
  console.log('Documents:', docs);
});

// update
mongo.updateDocument('collectionName', { "name" : "John Doe" }, { "admin" : "true" }, function(result) {
  console.log('Added the admin field to John Does document');
});

// delete
mongo.deleteDocument('collectionName', { "name" : "John Doe" }, function(result) {
  console.log('Deleted the first document with the name John Doe');
});
```
<strong>NOTE:</strong> if docs is null, an error occured with the query