const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
	const coll = db.collection(collection);

	coll.insert(document, (err, result) => {
		assert.equal(err, null);
		console.log("result as in the oper file during INSERT \n" + result);
		callback(result);
	})
}

exports.deleteDocument = (db, document, collection, callback) => {
	const coll = db.collection(collection);

	coll.deleteOne(document, (err, result) => {
		assert.equal(err, null);
		callback(result);
	})

}

exports.updateDocument = (db, document, update, collection, callback) => {
	const coll = db.collection(collection);

	coll.updateOne(document, { $set: update }, null, (err, result) => {
		assert.equal(err, null);
		console.log("result as in oper file after UPDATE : \n" + result);
		callback(result);
	})
}

exports.findDocument = (db, collection, callback) => {
	const coll = db.collection(collection);

	coll.find({}).toArray((err, docs) => {
		assert.equal(err, null);
		console.log("docs found in oper file after FIND : \n" + docs);
		callback(docs);
	})
}