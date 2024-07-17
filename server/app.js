import express from "express";
import cors from 'cors';
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolver.js";
import { ApolloServer } from "apollo-server-express";

const PORT = 2020;

const app = express();
app.use(cors())

const server=new ApolloServer({typeDefs,resolvers})
server.start()
.then(()=>{
    server.applyMiddleware({app})
    app.listen(PORT,()=>{
        console.log("server started")
    })
})

.catch(()=>{
    console.log("error")
})