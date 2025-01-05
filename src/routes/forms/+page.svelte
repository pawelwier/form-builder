<script>
import FormRecord from '$lib/forms/FormRecord.svelte';

export let data

$: ({ isAuth, forms } = data)
</script>

{#if isAuth}
  <div class="text-2xl font-black">
    Forms
  </div>
  
  {#each forms as { id, title } (id)}
    <FormRecord {id} {title} />
  {/each}
{/if}