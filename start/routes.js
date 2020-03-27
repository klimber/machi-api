'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const defaultCrudMiddlewares = new Map([
  [
    ['store', 'update'],
    ['auth', 'staff'],
  ],
  [['destroy'], ['auth', 'manager']],
])

Route.resource('series', 'SeriesController')
  .apiOnly()
  .middleware(defaultCrudMiddlewares)
Route.resource('tags', 'TagController')
  .apiOnly()
  .middleware(defaultCrudMiddlewares)
Route.resource('episodes', 'EpisodeController')
  .apiOnly()
  .middleware(defaultCrudMiddlewares)

Route.get('me', 'UserController.me').middleware('auth')
Route.post('login', 'UserController.login').middleware('guest')
