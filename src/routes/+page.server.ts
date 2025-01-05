import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
  return {
    user: locals.user
  }
}

export const actions = { 
  login: async ({ request, locals }) => { 
      const formData = await request.formData(); 
      const username = formData.get('username') as string; 
      const password = formData.get('password') as string; 

      try { 
          await locals.pb.collection('users').authWithPassword(username, password); 
          if (!locals.pb?.authStore?.record?.verified) { 
              locals.pb.authStore.clear(); 
              return { 
                  notVerified: true 
              }; 
          } 
      } catch (err: any) { 
          error(500, err.message); 
      } 

      redirect(303, '/'); 
  } 
}