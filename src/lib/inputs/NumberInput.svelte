<script lang="ts">
import type { Optional } from "../../types/utils"

export let header: string
export let name: string
export let placeholder: Optional<string>
</script>

<number-input-item>
  <div class="font-black">
    {header}
  </div>
  
  <input
    type="number" 
    {name}
    {placeholder}
    class="block"  
  />
</number-input-item>