import Router from 'koa-router'
import jwt from '../middleware/jwt'
import logger from '../logs/log'

import UserActionController from '../controllers/UserActionController'

const router = new Router()
const jwtMiddleware = jwt({secret: process.env.JWT_SECRET})

router.get('/', async(ctx, next) => {
    ctx.body = { message: 'Hi there. ' + process.env.npm_package_name}
})

export default router