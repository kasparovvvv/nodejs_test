const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Post {
        id:ID 
        title:String
        description:String
    }

    input PostInput {
        title: String
        description: String
    }

    type Query {
        hello:String
        getAllPosts:[Post]
        getPost(id:ID):Post
    }

    type Mutation {
        createPost(post:PostInput) :Post
    }
`;


module.exports  = {typeDefs};