const mapResolvers = require("./mapResolvers")
// const { trackError } = require("../bin/db/fileController.js")


const enableMonitoring = (resolvers,accessID) => {
const injectedResolvers = mapResolvers(resolvers,accessID)
return injectedResolvers
};




module.exports = { enableMonitoring }
