<script>
export let data

$: ({ record, errorMsg } = data)
</script>

{#if errorMsg}
  <div>
    error: {errorMsg}
  </div>
{:else if record}
{@const { id, title, inputs } = record}
  <div>
    id: {id}
  </div>
  <div>
    title: {title}
  </div>
  <div>
    contains: {inputs.length} input(s)
  </div>
{/if}
