const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {TestRoutes} = require('./routes');
const  mongoose = require('mongoose');
const PORT = 5000;

const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");



async function startServer() {
    const app =  express();
    const appoloServer = new ApolloServer({typeDefs,resolvers});

    await appoloServer.start();

    appoloServer.applyMiddleware({app:app,path:"/robin"});

    const dbURL = `mongodb://127.0.0.1:27017/nodejs_mongo`;

    mongoose.connect(dbURL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => {

        console.log(`Mongoose connected`);
        
        app.use("/test",TestRoutes.router)
        app.listen(PORT,() => {
            console.log(`Api is runing at:${PORT}`);
        })

    })
    .catch((err)=>console.log(err))



    

}

startServer();