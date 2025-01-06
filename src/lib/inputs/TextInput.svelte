<script lang="ts">
import type { Optional } from "../../types/utils";

export let header: string
export let name: string
export let placeholder: Optional<string>
</script>

<text-input-item>
  <div class="font-black">
    {header}
  </div>
  <input
    type="text" 
    {name}
    {placeholder}
    class="block"  
  />
</text-input-item>