import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './resolver';

const app = express();
const port = 8080;

app.get('/', (request, response) => {
    response.send('Main Endpoint Hit GraphQl.');
});

const root = resolvers;

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(port, () => {
    console.log(`Listening on port ${port}/Graphql`);
});
