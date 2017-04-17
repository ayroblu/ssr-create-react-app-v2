import express from 'express'
const router = express.Router()

import universalLoader from '../universal'

router.get('/', universalLoader)

export default router
