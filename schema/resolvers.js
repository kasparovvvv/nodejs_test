const Post = require("../models/Post.model")

const resolvers ={
    Query: {
        hello:() => {
            return "Hello World!!"
        },
        getAllPosts: async () =>{
            return await Post.find()

        },
        getPost: async (parent,args) =>{
            const {id } = args;
            return await Post.findById(id)

        },
    },
    Mutation: {
        createPost : async (parent,args) => {
           
            const {title,description} = args.post;
            const post = new Post({title,description});
            await post.save();
            return post;
            
        }
    }

};

module.exports = {resolvers};