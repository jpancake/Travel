import mongoose from 'mongoose'
const Articles = mongoose.model('articles')



async function addArticle(data) {
	// Create new Article
	const article = new Article(data)

	// Try to save to database if error display error
	try {
		await article.save()

		return article
	} catch (e) {
		throw new Error(e)
	}
}

async function fetchArticles() {
	// try to fetch articles from database if error display error
	try {
		const articles = await Articles.find({})

		return articles
	} catch (e) {
		throw new Error(e)
	}
}

export default { addArticle, fetchArticles }