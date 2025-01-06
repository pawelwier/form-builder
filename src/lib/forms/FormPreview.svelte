<script>
import FormInput from "$lib/inputs/FormInput.svelte";

export let record

$: ({ title, inputs } = record || {})
</script>

<form-preview class="block my-10">
  <div class="text-2xl uppercase font-black">
    {title}
  </div>

  <form action="?/submit" method="POST">
    {#each inputs as input (input.id)}  
      <FormInput {input} />
    {/each}

    <button 
      type="submit"
      class="btn-main"  
    >
      Submit
    </button>
  </form>
</form-preview>