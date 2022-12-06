import express from 'express'
import pkg from 'pg';

// PostgreSQL
const { Client } = pkg;

// ExpressJS
const PORT = 3000
const app = express()
 
// Connection PostgreSQL
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'sundb_admin',
  password: '123password',
  database: "sundb"
})

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

// Routing ExpressJS
app.get('/', (req, res) => {
    res.send({ info: `Hello World!` })
})

app.get('/api', (req, res) => {
    res.send({ info: `Hello API!` })
})

app.listen(PORT, () => {
	console.log(`# Server started: http://localhost:${PORT}/`)
})

app.post("/api/register", (req, res) => {
    res.send({ info: `Hello register!` })
})
app.post("/api/login", (req, res) => {
    res.send({ info: `Hello login!` })
})
//app.get("/api/lobby/[lobby-id]", (req, res) => {
//    res.send({ info: `Hello lobbyid!` })
//})
//app.get("/api/lobby/[lobby-id]/[message-id]", (req, res) => {
//    res.send({ info: `Hello lobbymess!` })
//})
//app.post("/api/lobby/[lobby-id]", (req, res) => {
//    res.send({ info: `Hello lobbypost!` })
//})
app.get("/api/users", (req, res) => {
    res.send({ info: `Hello users!` })
})
//app.get("/api/users/[user-id]", (req, res) => {
//    res.send({ info: `Hello usersid!` })
//})
//app.post("/api/lobby/[lobby-id]/add-user", (req, res) => {
//    res.send({ info: `Hello addusers!` })
//})
//app.post("/api/lobby/[lobby-id]/remove-user", (req, res) => {
//    res.send({ info: `Hello removeusers!` })
//})
//app.patch("/api/lobby/[message-id]", (req, res) => {
//    res.send({ info: `Hello patchid!` })
//})
//app.delete("/api/messages/[message-id]", (req, res) => {
//    res.send({ info: `Hello deletemessage!` })
//})
