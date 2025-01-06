<script>
import BackToListBtn from "$lib/forms/BackToListBtn.svelte";
import FormPreview from "$lib/forms/FormPreview.svelte";

export let data

$: ({ record, errorMsg } = data)
</script>

{#if errorMsg}
  <div>
    error: {errorMsg}
  </div>
{:else if record}
  <FormPreview {record} />
{/if}


<BackToListBtn />