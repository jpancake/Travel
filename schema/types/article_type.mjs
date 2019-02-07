import graphql from '../graphql'
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

const ArticleType = new GraphQLObjectType({
	name: 'ArticleType',
	fields: () => ({
		_id: { type: GraphQLID },
		title: { type: GraphQLString },
		date: { type: GraphQLString },
		location: { type: GraphQLString },
		description: { type: GraphQLString },
	}),
})

export default ArticleType
