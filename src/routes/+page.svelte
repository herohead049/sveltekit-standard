<script lang="ts">
	import { io } from '$lib/webSocketConnection';
	import { onMount } from 'svelte';

	onMount(() => {
		io.emit('join', { room: 'page' });
	});
</script>
