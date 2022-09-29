const db = require('../db')

class UserController {
    async createWorker(req, res) {
        const workers = req.body
        const deleteWorkers = await db.query(`DELETE FROM WORKER WHERE ID > 0`);
        const updateSequence = await db.query(`ALTER SEQUENCE worker_id_seq RESTART WITH 1`);
        for (let i = 0; i < workers.length; i++){
            const newWorker = await db.query(`INSERT INTO WORKER (name, position, text) values ($1, $2, $3) RETURNING *`, [workers[i].name, workers[i].position, workers[i].text])
        }
    }
    async getWorkersSorted(req, res) {
        const {field, order} = req.body
        const sortedWorkers = await db.query(`SELECT * FROM WORKER ORDER BY ${field} ${order} `);
        res.json(sortedWorkers.rows)
    }
    async getWorkersByField(req, res) {
        const {field, value} = req.body
        const searchedWorkers = await db.query(`SELECT * FROM WORKER WHERE ${field} = '${value}' `);
        console.log(`SELECT * FROM WORKER WHERE ${field} = '${value}' `)
        res.json(searchedWorkers.rows)
    }
}

module.exports = new UserController()