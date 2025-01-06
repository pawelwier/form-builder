<script lang="ts">
import type { Input } from "../../types/Input";

// @ts-nocheck
import NumberInput from "./NumberInput.svelte";
import SelectInput from "./SelectInput.svelte";
import TextInput from "./TextInput.svelte";

export let input: Input

$: ({ type, name, header, placeholder, data } = input)
$: Component = {
  text: TextInput,
  number: NumberInput,
  singleChoice: SelectInput
}[type as unknown as string]
</script>

<svelte:component
  this={Component} 
  {name} {header} {placeholder} {data}
/>