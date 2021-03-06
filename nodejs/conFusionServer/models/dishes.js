const mongoose = require('mongoose');
const Schema = mongoose.Schema
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency

const commentSchema = new Schema({

	author : {
		type : String,
		required : true,
	},
	rating : {
		type : Number,
		required : true,
		min : 1,
		max : 5,
	},
	comment : {
		type : String,
		required : true,

	}, 
}, {
	timestamps : true,
})

const dishSchema = new Schema({
	name : {
		type : String,
		required : true,
		unique : true
	},
	description : {
		type : String,
		required : true,
	},
	comments : [ commentSchema ],
	price : {
		type : Currency, 
		required : true,
		min : true,
	},
	image : {
		type : String,
		required : true,

	},
	label : {
		type : String,
		default : ""
	},
	category : {
		type : String,
		required : true,
	},
	featured : {
		type : Boolean,
		default : false,
	}

}, 
	
	
	{
	timestamps : true,
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;