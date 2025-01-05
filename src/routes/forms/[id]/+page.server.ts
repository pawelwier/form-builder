import { ClientResponseError } from "pocketbase"
import { checkUserAuth } from "../../../helpers/authHelpers"
import { pb } from "../../../pb/getClient"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params: { id }, locals }) => {
  checkUserAuth(locals)

  try {
    const record = await pb.collection('forms').getOne(id)
    return { record }
  } catch (e: unknown) {
    let errorMsg: string
    if (e instanceof ClientResponseError && e.status === 404) {
      errorMsg = 'A form with provided ID does not exist'
    }
    else errorMsg = 'An error occurred'
    return { errorMsg }
  }
}