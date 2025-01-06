<script lang="ts">
import type { AuthRecord } from "pocketbase"
import LogoutBtn from "./LogoutBtn.svelte"
import type { UserRecord } from '../../types/user'

export let user: AuthRecord
</script>

<div class="
  flex items-center gap-4
  px-6
  text-right
">
  {#if user}
    {@const { name, username } = user as unknown as UserRecord}
    <user-info class="flex">
      <div>
        Logged in as: 
      </div>
      <div class="px-2 font-black">
        {username}
      </div>
      <div>
        (
      </div>
      <div class="font-black">
        {name}
      </div>
      <div>
        )
      </div>
    </user-info>

    <LogoutBtn />
  {:else}
    <div>
      Please log in
    </div>
  {/if}
</div>
