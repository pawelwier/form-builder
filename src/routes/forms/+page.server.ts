import type { PageServerLoad } from './$types'
import { pb } from '../../pb/getClient'
import { checkUserAuth } from '../../helpers/authHelpers'



export const load: PageServerLoad = async ({ locals }) => {
  checkUserAuth(locals)

  const isAuth = !!locals
  const records = await pb.collection('forms').getFullList({
    sort: '-created',
  })

  return { 
    forms: records, 
    isAuth 
  }
}