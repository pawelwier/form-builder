<script lang="ts">
import type { Optional } from "../../types/utils"

export let header: string
export let name: string
export let data: Optional<string>

// TODO: validate 'data'
const selectOptions = data ? JSON.parse(data).options : []
</script>

<number-input-item>
  <div class="font-black">
    {header}
  </div>
  <select 
    {name}  
    class="block"
  >
    {#each selectOptions as { value, text }, i (i)}
      <option {value} >{text}</option>
    {/each}
  </select>
</number-input-item>