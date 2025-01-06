<script lang="ts">
export let data: { isAuth: boolean }
</script>

{#if data.isAuth}
  <a href="/forms">Forms</a>
{:else}
  <!-- TODO: move to LoginForm component -->
  <form action="?/login" method="post"> 
    <input
      type="text" 
      name="username" 
      placeholder="Username"
      class="block"  
    /> 
    <input
      type="password"
      name="password"
      placeholder="Password"
      class="block"
    /> 
    <button type="submit">Login</button> 
  </form> 
{/if}