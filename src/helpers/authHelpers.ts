import { redirect } from "@sveltejs/kit"
import type { AuthModel } from "pocketbase"

export const checkUserAuth = (locals: { user: AuthModel | null }) => {
  if (!locals.user) {
    redirect(307, '/')
  }
}