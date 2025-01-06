import { ClientResponseError } from "pocketbase"
import { checkUserAuth } from "../../../helpers/authHelpers"
import { pb } from "../../../pb/getClient"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params: { id }, locals }) => {
  checkUserAuth(locals)

  try {
    const record = await pb.collection('forms').getOne(id)
    const { inputIds } = record // TODO: add types
    const inputRecords = await pb.collection('inputs').getFullList({
      filter: inputIds.map((inputId: string) => `id='${inputId}'`).join("||"),
    })
    record.inputs = inputRecords

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

export const actions = {
  submit: async ({ request, locals }) => {
    checkUserAuth(locals)

    const formData = await request.formData()

    console.log(formData)
  }
}