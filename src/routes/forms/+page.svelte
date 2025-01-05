<script>
export let data

$: ({ isAuth, forms } = data)
</script>

{#if isAuth}
  Forms:
  {#each forms as { id, title } (id)}
    <a href="/forms/{id}">{title}</a>
  {/each}
{/if}