const mongoose = require('mongoose');
const Schema = mongoose.Schema
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency


const promoSchema = new Schema({
	name : {
		type : String,
		required : true,
		unique : true
	},
	description : {
		type : String,
		required : true,
	},
	
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
	
	featured : {
		type : Boolean,
		default : false,
	}

}, 
	
	
	{
	timestamps : true,
});

var Promos = mongoose.model('Promo', promoSchema);

module.exports = Promos;