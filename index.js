const express = require('express')
const workerRouter = require('./routes/worker.routes')
const PORT = process.env.PORT || 8800;
const parse = require('./controller/parser')
const app = express()

app.use(express.json())
app.use('/api', workerRouter);

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}/`)
    parse();
})