<h3><strong>mongo-handler</strong>, a simple MongoDB wrapper module</h3>
<hr>
This module was written to negate the need for redundant error and null checks when writing MongoDB queries in Node. Each function has one callback argument that can either be a JSON object or null (error).
<hr>
<strong>Importing</strong>

You must pass the Mongo URL when initializing the module, in this format *mongodb://host:port/collection* 
~~~
var mongo = require('mongo-handler')('mongodb://localhost:27017/mongo-handler-test');
~~~
<hr>
<strong>Insert</strong>

Insert a new document, 'document' must be a JSON object.
~~~
mongo.insertDocument('collectionName', document, function(result) {
  console.log('Inserted!');
});
~~~
<hr>
<strong>Find</strong>

Find all documents that have the fields/values stored in 'where'. 'where' must be a JSON object of values to search using. 'docs' is the callback argument and it is an array of documents.
~~~
mongo.findDocuments('collectionName', where, function(docs) {
  console.log('Documents:', docs);
});
~~~
<hr>
<strong>Update</strong>

Update all documents that have the fields/values stored in 'where' with the 'new' values. 'where' and 'new' must both be JSON objects.
~~~
mongo.updateDocument('collectionName', where, new, function(result) {
  console.log('Updated!');
});
~~~
<hr>
<strong>Delete</strong>

Delete the first document to have the fields/values stored in 'where'. (*Note: this function only removes one document*)
~~~
mongo.deleteDocument('collectionName', where, function(result) {
  console.log('Deleted!');
});
~~~
