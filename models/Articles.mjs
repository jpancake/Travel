import mongoose from 'mongoose'

const { Schema } = mongoose

const articleSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	pictures: {
		type: [{ type: Schema.Types.ObjectId, ref: 'Pictures'}]
	}
})

mongoose.model('articles', articleSchema)
