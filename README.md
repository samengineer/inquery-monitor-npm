# Inquery

Monitor your GraphQL endpoint.

Note: This package is for production environment GraphQL monitoring. Currently the supported GraphQL implementations are Apollo GraphQL & GraphQL Yoga.



**Step 1: Install Inquery-Monitor**

```
npm install inquery-monitor
```

**Step 2: Request for AccessID/Key**
Go to Inquery.io & request for an AccessID / AccessKey. This will be your login credentials.

**Step 3: Require inquery-monitor & destructure enableMonitoring from the module in your server.js file. **
```
const { enableMonitoring } = require('inquery-monitor')
```

**Step 4: Pass your resolvers into enableMonitoring as the first param, and your API AccessID as the second.**
```
const updatedResolvers = enableMonitoring(oldResolvers, 'yourAPIAcessID')
```

**Step 5: Start your GraphQL server with the updated resolvers.**
```
const server = new ApolloServer({ typeDefs, updatedResolvers })
server.listen( ).then( { url } ) ⇒ { console.log(`Server is listening at { url }` )}) 
```

**Step 6: Login to inquery.io to view your GraphQL query analytics!**

