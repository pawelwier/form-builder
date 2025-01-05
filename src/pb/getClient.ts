import PocketBase from "pocketbase"
import {
  POCKETBASE_URL, POCKETBASE_USER, POCKETBASE_PASSWORD
} from '$env/static/private'

const pb = new PocketBase(POCKETBASE_URL)

await pb.collection('users').authWithPassword(POCKETBASE_USER, POCKETBASE_PASSWORD);

export { pb }
