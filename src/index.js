const { ApolloServer } = require('apollo-server')

const DB = {
  authors: [
    { id: 1, name: 'Pedrinho' },
    { id: 2, name: 'Joãozinho' },
    { id: 3, name: 'Cleitinho' }
  ],
  posts: [
    { id: 1, authorId: 1, title: 'Postzão' },
    { id: 2, authorId: 1, title: 'Postzada da hora' },
    { id: 3, authorId: 3, title: 'Dale dole' }
  ]
}

const typeDefs = `
  type Query {
    healthCheck: Boolean!

    authors: [Author]!
    author(id: ID!): Author

    posts: [Post]!
  }

  input AuthorInput {
    name: String!
  }

  type Mutation {
    createAuthor(input: AuthorInput): Author!
  }

  type Author {
    id: ID!
    name: String!

    posts: [Post]!
  }

  type Post {
    id: ID!
    title: String!

    author: Author!
  }
`

const resolvers = {
  Query: {
    healthCheck: () => true,
    authors: () => DB.authors,
    author: (_, { id }) => DB.authors.find(author => author.id === +id),
    posts: () => DB.posts,
  },

  Mutation: {
    createAuthor: (_, { input }) => {
      const newAuthor = { id: Date.now(), name: input.name }
      DB.authors.push(newAuthor)

      return newAuthor
    }
  },

  Author: {
    posts: ({ id }) => DB.posts.filter(post => post.authorId === +id)
  },

  Post: {
    author: ({ authorId }) => DB.authors.find(author => author.id === +authorId) 
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(3024).then(({ url }) => console.log(url))