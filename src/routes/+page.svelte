<script lang="ts">
	import { io } from '$lib/webSocketConnection';
	import { onMount } from 'svelte';
	import { Button } from 'flowbite-svelte';

	onMount(() => {
		io.emit('join', { room: 'page' });
	});
</script>

<Button>Cool</Button>
