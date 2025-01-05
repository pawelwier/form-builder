<script>
export let user

$: ({ name, username } = user || {})
</script>

<div class="
  px-6
  text-right
">
  {#if user}
    <span>
      Logged in as: 
    </span>
    <span class="font-black">
      {username}
    </span>
    <span>
      (
    </span>
    <span class="font-black">
      {name}
    </span>
    <span>
      )
    </span>
  {:else}
    <div>
      Please log in
    </div>
  {/if}
</div>
