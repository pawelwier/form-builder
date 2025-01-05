<script>
    import LogoutBtn from "./LogoutBtn.svelte";

export let user

$: ({ name, username } = user || {})
</script>

<div class="
  flex items-center gap-4
  px-6
  text-right
">
  {#if user}
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
