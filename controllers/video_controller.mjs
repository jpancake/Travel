import mongoose from 'mongoose'

const Videos = mongoose.model('videos')



async function addVideo(data) {
	// Create new Article
	const video = new Videos(data)

	// Try to save to database if error display error
	try {
		await video.save()

		return video
	} catch (e) {
		throw new Error(e)
	}
}

async function fetchVideos() {
	// try to fetch articles from database if error display error
	try {
		const videos = await Videos.find({})

		return videos
	} catch (e) {
		throw new Error(e)
	}
}

export default { addVideo, fetchVideos }