<script>
import BackToListBtm from "$lib/forms/BackToListBtm.svelte";

export let data

$: ({ record, errorMsg } = data)
</script>

{#if errorMsg}
  <div>
    error: {errorMsg}
  </div>
{:else if record}
  {@const { id, title, inputs } = record}
  <form-record class="block mb-5">
    <div>
      id: {id}
    </div>
    <div>
      title: {title}
    </div>
    <div>
      contains: {inputs.length} input(s)
    </div>
  </form-record>
{/if}

<BackToListBtm />