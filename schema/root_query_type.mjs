import graphql from './graphql'
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString } = graphql

import ArticleType from './types/article_type'

import articles from './../controllers/article_controller'

export default new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		articles: {
			type: new GraphQLList(ArticleType),
			resolve(parentValue) {
				return articles.fetchArticles()
			},
			videos: {
				type: new GraphQLList(VideoType),
				resolve(parentValue) {
					return videos.fetchArticles()
				},
		},
	},
})
