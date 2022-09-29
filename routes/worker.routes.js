const Router = require ('express')
const router = new Router()
const workerController = require('../controller/worker.controller')

router.post('/worker', workerController.createWorker)
router.post('/worker-sort', workerController.getWorkersSorted)
router.post('/worker-search', workerController.getWorkersByField)

module.exports = router
