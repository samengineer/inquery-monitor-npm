# Inquery

Monitor your GraphQL endpoint.

Note: This package is for production environment GraphQL monitoring. Currently the supported GraphQL implementations are Apollo GraphQL & GraphQL Yoga.



**Install inquery-monitor**

```javascript
npm install inquery-monitor
```

**Request for AccessID/Key**

Go to Inquery.io & request for an AccessID / AccessKey. This will be your login credentials.

**Require inquery-monitor & destructure enableMonitoring from the module in your server.js file.**
```javascript
const { enableMonitoring } = require('inquery-monitor')
```

**Pass your resolvers into enableMonitoring as the first param, and your API AccessID as the second.**
```javascript
const updatedResolvers = enableMonitoring(oldResolvers, 'yourAPIAcessID')
```

**Start your GraphQL server with the updated resolvers.**
```javascript
const server = new ApolloServer({ typeDefs, updatedResolvers })
server.listen( ).then( { url } ) ⇒ { console.log(`Server is listening at { url }` )}) 
```

**Login to inquery.io to view your GraphQL query analytics!**

![alt text]('https://i.ibb.co/cw23G0y/Screen-Shot-2019-09-12-at-4-46-44-PM.png')
