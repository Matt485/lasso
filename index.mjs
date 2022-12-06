import express from 'express'

const PORT = 3000
const app = express()


app.get('/', (req, res) => {
	res.send({ info: `Hello World!` })
})

app.get('/api', (req, res) => {
})

app.listen(PORT, () => {
	console.log(`# Server started: http://localhost:${PORT}/`)
})

app.post("/api/register")
app.post("/api/login")
app.get("/api/lobby/[lobby-id]")
app.get("/api/lobby/[lobby-id]/[message-id]")
app.post("/api/lobby/[lobby-id]")
app.get("/api/users")
app.get("/api/users/[user-id]")
app.post("/api/lobby/[lobby-id]/add-user")
app.post("/api/lobby/[lobby-id]/remove-user")
app.patch("/api/lobby/[message-id]")
app.delete("/api/messages/[message-id]")
