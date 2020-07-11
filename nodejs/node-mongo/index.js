const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = "mongodb://localhost:27017/";
const dbname = "conFusion";

MongoClient.connect(url, (err, client) => {

	assert.equal(err,null);
	console.log("Connected");

	const db = client.db(dbname);
	const collection = 'dishes';
	// collection.insertOne({"name" : "SamosaChat", "description" : "Samosa toh achaa h naa"}, (err, result) => {
	// 	assert.equal(err, null);
	// 	console.log("After Insert Done : \n");
	// 	console.log(result.ops);

	// 	collection.find({}).toArray((err, docs) => {
	// 		assert.equal(err, null);
	// 		console.log("Found : \n");
	// 		console.log(docs);

	// 		db.dropCollection('dishes', (err, result) => {
	// 			assert.equal(err, null);
	// 			client.close();
	// 		});
	// 	});
	// });
	dboper.insertDocument(db, { name : "The Pizza", description : "The Description"}, collection, (result) => {
		console.log("INSERT in index file \n" + result);

		dboper.findDocument(db, collection, (docs) => {
			console.log("FIND in index file \n" + docs);

			dboper.updateDocument(db, {name : "The Pizza"}, {description : "naya description"}, collection, (result) => {
				console.log("UPDATE in index file\n" + result);

				dboper.findDocument(db, collection, (docs) => {
					console.log("FIND in index file\n" + docs);

					db.dropCollection("dishes", (result) => {
						client.close();
					})
				})
			})
		})
	})
});