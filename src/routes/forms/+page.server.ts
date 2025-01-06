import type { PageServerLoad } from './$types'
import { pb } from '../../pb/getClient'
import { checkUserAuth } from '../../helpers/authHelpers'
import type { RecordModel } from 'pocketbase'



export const load: PageServerLoad = async ({ locals }) => {
  checkUserAuth(locals)

  const isAuth: boolean = !!locals
  const records: RecordModel[] = await pb.collection('forms').getFullList({
    sort: '-created',
  })

  return { 
    forms: records, 
    isAuth 
  }
}