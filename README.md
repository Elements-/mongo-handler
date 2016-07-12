
<strong>NOTE: this package is great for testing, and quick scripts, but it SHOULD NOT be used in production applications. You should always properly handle errors.</strong>

<h3><strong>mongo-handler</strong>, a simple MongoDB wrapper module</h3>
<hr>
This module was written to negate the need for redundant error and null checks when writing MongoDB queries in Node. Each function has one callback argument that can either be an object or null (error).
<hr>
<strong>Importing</strong>

You must pass the Mongo URL when initializing the module, in this format *mongodb://host:port/database*
``` js
var mongo = require('mongo-handler')('mongodb://localhost:27017/myAwesomeDatabase');
```
<hr>
<strong>Insert</strong>

Insert a new document into a collection, `document` must be an object.
``` js
mongo.insertDocument('collectionName', document, function(result) {
  console.log('Inserted!');
});
```
*e.x*
``` js
mongo.insertDocument('Users', { firstName : 'John', lastName : 'Doe' }, function(result) {
  console.log('Inserted a mew user document!');
});
```
<hr>
<strong>Find</strong>

Find all documents that contain the `where` argument. `where` must be an object, if the object is empty all documents will be returned.
``` js
mongo.findDocuments('collectionName', where, function(docs) {
  console.log('Documents:', docs);
});
```
*e.x*
``` js
mongo.findDocuments('Users', { firstName : 'Bob' }, function(docs) {
  console.log('Documents with firstName = Bob ', docs);
});
```
<hr>
<strong>Update</strong>

Update all documents that contain the `where` argument. `where` must be an object, if the object is empty all documents will be updated.
``` js
mongo.updateDocument('collectionName', where, new, function(result) {
  console.log('Updated!');
});
```
*e.x*
``` js
mongo.updateDocument('Users', { firstName : 'Bob' }, { firstName : 'John' }, function(result) {
  console.log('Updated name of Bob to John.');
});
```
<hr>
<strong>Delete</strong>

Delete the first document that contains the `where` argument. (*Note: this function only removes one document*)
``` js
mongo.deleteDocument('collectionName', where, function(result) {
  console.log('Deleted!');
});
```
*e.x*
``` js
mongo.deleteDocument('Users', { firstName : 'Bob' }, function(result) {
  console.log('Deleted the a document with firstName = Bob');
});
```
<hr>
<strong>Find and Sort</strong>

Find documents using `where` (same as findDocuments) then sort using the `sortBy` object. `sortBy` should contain the key to sort by and a 1 or -1 for ascending or descending, respectively.
``` js
mongo.findAndSort('collectionName', where, sortBy, function(docs) {
  console.log('Sorted Documents:', docs);
});
```
*e.x*
``` js
mongo.findAndSort('Users', {}, { age : -1 }, function(docs) {
  console.log('All users sorted from oldest to youngest:', docs);
});
```
