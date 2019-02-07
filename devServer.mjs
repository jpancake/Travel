// NPM Modules
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import graphQLHTTP from 'express-graphql'
// Authentication
import keys from './config/keys.js'
// Models & Schema
import './models'
import schema from './schema/schema.mjs'

// Express Setup
const app = express()

// Mongoose Setup
mongoose.connect(
	keys.MONGODB_URI,
	{ useNewUrlParser: true },
	error => {
		if (error)
			console.log(`There was an Error: ${error}`)
		 else
			console.log('Successfully connected to TravelBlog Database')
	}
)
mongoose.Promise = global.Promise

// Middleware Setup
app.use(bodyParser.json())
app.use(morgan('dev'))

// Routes setup
app.use('/graphql', graphQLHTTP(req => ({
	schema,
	graphiql: true
})))


// Server Setup
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
