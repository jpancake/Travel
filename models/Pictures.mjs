import mongoose from 'mongoose'

const { Schema } = mongoose

const pictureSchema = new Schema({
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
	},
	pictures: {
		type: String,
		required: true,
	}
})

mongoose.model('pictures', pictureSchema)

