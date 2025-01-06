<script lang="ts">
import FormRecord from '$lib/forms/FormRecord.svelte'
import type { RecordModel } from 'pocketbase'

export let data: { isAuth: boolean, forms: RecordModel[] }

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