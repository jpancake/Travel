import graphql from './graphql'
const { GraphQLSchema } = graphql

import query from './root_query_type'

export default new GraphQLSchema({ query })
