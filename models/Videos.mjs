import mongoose from 'mongoose'

const { Schema } = mongoose

const videoSchema = new Schema({
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
	tags: {
		type: [{ type: String }]
	}
})

mongoose.model('videos', videoSchema)

