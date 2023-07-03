const jsonserver=require("json-server")
const cors=require ("cors")


const server=jsonserver.create()
const router=jsonserver.router("db.json")
const middlewares=jsonserver.defaults()

server.use(cors())
server.use(jsonserver.bodyParser)
server.use(middlewares)
server.use(router)

const PORT=8080

server.listen(PORT,()=>{
    console.log("JSON Server running At PORT:8080")
})