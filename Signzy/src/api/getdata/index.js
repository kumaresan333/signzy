import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create, index, show, update, destroy } from './controller'

const router = new Router()

/**
 * @api {post} /getdata Create getdata
 * @apiName CreateGetdata
 * @apiGroup Getdata
 * @apiSuccess {Object} getdata Getdata's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Getdata not found.
 */
router.post('/',
  create)

/**
 * @api {get} /getdata Retrieve getdata
 * @apiName RetrieveGetdata
 * @apiGroup Getdata
 * @apiUse listParams
 * @apiSuccess {Object[]} getdata List of getdata.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /getdata/:id Retrieve getdata
 * @apiName RetrieveGetdata
 * @apiGroup Getdata
 * @apiSuccess {Object} getdata Getdata's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Getdata not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /getdata/:id Update getdata
 * @apiName UpdateGetdata
 * @apiGroup Getdata
 * @apiSuccess {Object} getdata Getdata's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Getdata not found.
 */
router.put('/:id',
  update)

/**
 * @api {delete} /getdata/:id Delete getdata
 * @apiName DeleteGetdata
 * @apiGroup Getdata
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Getdata not found.
 */
router.delete('/:id',
  destroy)

export default router
