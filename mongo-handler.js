var mongodb = require('mongodb');
var mongodbClient = mongodb.MongoClient;
var ObjectID = require('mongodb').ObjectID;

var mongoUrl;
var db;

module.exports = function(url) {
  mongoUrl = url;

  //Establish our MongoDB connection
  mongodbClient.connect(mongoUrl, function(err, thedb) {
    if(err) {
      console.log('MongoDB Connection Error: ' + err);
      db = null;
    } else {
    	console.log('MongoDB Established to ' + mongoUrl);
      db = thedb;
    }
  });

  return module;
}

/**
	Insert a new document
**/
module.insertDocument = function(collectionName, data, callback) {
  if(db) {
    db.collection(collectionName).insert(data, {w:1}, function(err, docs) {
      if (err) {
        console.log('MongoDB Insert Query Error: ' + err);
        if(callback) callback(null);
      } else {
        if(callback) callback(docs);
      }
    });
  }
}

/**
	Delete a document
**/
module.deleteDocument = function(collectionName, where, callback) {
  if(db) {
    db.collection(collectionName).deleteOne(where, function(err, docs) {
      if (err) {
        console.log('MongoDB Delete Query Error: ' + err);
        if(callback) callback(null);
      } else {
        if(callback) callback(docs);
      }
    });
  }
}

/**
	Find documents using 'search'(obj)
**/
module.findDocuments = function(collectionName, search, callback) {
  if(db) {
    db.collection(collectionName).find(search).toArray(function(err, docs) {
      if (err) {
        console.log('MongoDB Find Query Error: ' + err);
    	  if(callback) callback(null);
    	} else {
    	  if(callback) callback(docs);
    	}
    });
  }
}

/**
	Find and sort documents
  -1 = descending
  1 = ascending
**/
module.findAndSort = function(collectionName, search, sortBy, callback) {
  if(db) {
    db.collection(collectionName).find(search).addQueryModifier('$orderby', sortBy).toArray(function(err, docs) {
      if (err) {
        console.log('MongoDB Find Query Error: ' + err);
    	  if(callback) callback(null);
    	} else {
    	  if(callback) callback(docs);
    	}
    });
  }
}

/**
	Update a document
**/
module.updateDocument = function(collectionName, where, data, callback) {
  if(db) {
    db.collection(collectionName).updateOne(
      where,
      data,
      function(err, docs) {
        if(err) {
          console.log('MongoDB Update Query Error: ' + err);
          if(callback) callback(null);
        } else {
          if(callback) callback(docs);
        }
    });
  }
}
