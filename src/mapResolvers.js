const enableTracking = require("./enableTracking")

function mapResolvers(originalResolversObject,accessID) {
  const updatedResolvers = {}
  const queries = Object.keys(originalResolversObject) // custom query types 
  const resolvers = Object.values(originalResolversObject); // object containing a bunch of objects key value pairs of resolvers & field names
  
  
  queries.forEach((key,index)=>{
    updatedResolvers[key] = enableTracking(resolvers[index],key,accessID) // should return an object which contains keys of 
  })
  
  return updatedResolvers
  
}
  

module.exports = mapResolvers