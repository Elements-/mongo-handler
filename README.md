<h3><strong>mongo-handler</strong>, a simple MongoDB wrapper module</h3>
<hr>
<h6>Examples</h6>
```javascript
var mongo = require('mongo-handler')('mongodb://localhost:27017/mongo-handler-test');

mongo.insertDocument('collectionName', { "name" : "John Doe" }, function(docs) {
  console.log('Inserted Document');
});

mongo.findDocuments('collectionName', {}, function(docs) {
  console.log('Documents:', docs);
});

mongo.updateDocument('collectionName', { "name" : "John Doe" }, { "admin" : "true" }, function(docs) {
  console.log('Added the admin field to John Doe's document');
});
```