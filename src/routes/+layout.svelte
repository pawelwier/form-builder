<script lang="ts">
import UserInfo from '$lib/layout/UserInfo.svelte'
import type { AuthRecord } from 'pocketbase'
import '../app.css'

export let children
export let data: { user: AuthRecord }

$:({ user } = data)
</script>

<app-header class="
	size-full
	grid grid-cols-[10rem_1fr_auto] items-center
">
	<div class="
		m-auto
		font-black uppercase
	">Form builder</div>
	
	<div class="
		size-full
		bg-slate-400
	"></div>

	<UserInfo {user} />
	
</app-header>

<app-body>
	{@render children()}
</app-body>

<app-footer class="
	flex justify-center
	size-full
	bg-slate-400
">
	<div class="m-auto">
		footer data
	</div>
</app-footer>