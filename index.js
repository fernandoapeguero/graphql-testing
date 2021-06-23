import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';

const app = express();
const port = 8080;

app.get('/', (request, response) => {
    response.send('Main Endpoint Hit GraphQl.');
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

app.listen(port, () => {
    console.log(`Listening on port ${port}/Graphql`);
});
