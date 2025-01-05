import PocketBase from 'pocketbase'
import { POCKETBASE_URL } from '$env/static/private'

export const handle = async ({ event, resolve }): Promise<Response> => {
  event.locals.pb = new PocketBase(POCKETBASE_URL)
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')
  const { record } = event.locals.pb.authStore

  try {
    if (event.locals.pb.authStore.isValid) {
      await event.locals.pb.collection('users').authRefresh()
      event.locals.user = structuredClone(record)
    }
  } catch(e) {
    event.locals.pb.authStore.clear()
    event.locals.user = null
  }

  const response = await resolve(event)
  response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

  return response
}