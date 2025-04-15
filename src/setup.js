var serverUrl = "http://localhost:4000"
var socketUrl = "http://localhost:4001"
if(process.env.backendURL != null ) socketUrl = process.env.backendURL
if(process.env.socketURL != null ) socketUrl = process.env.socketURL
export { serverUrl, socketUrl }