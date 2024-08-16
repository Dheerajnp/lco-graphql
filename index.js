import express from 'express';
import resolvers from './resolvers';
import schema from './schema';
import {graphqlHTTP} from 'express-graphql'

const app = express();

const root = {fun:()=> console.log("hello there")}

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.get('/',(req,res)=>{
    res.send("Up and running graphql")
});

app.listen(8082,()=>{
    console.log("Server is running on port 8082")
    console.log(`http://localhost:8082`)
});
