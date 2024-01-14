<script lang="ts">
	import { io } from '$lib/webSocketConnection';
	import { onDestroy, onMount } from 'svelte';
	import { Button, Badge } from 'flowbite-svelte';
	import type { SocketUser } from '$lib/types';

	function closeWindow() {
		window.close();
	}

	let socketUsers: SocketUser[] = [];
	onMount(() => {
		io.emit('join-room', 'demo');

		io.on('socket-users', (data: SocketUser[]) => {
			socketUsers = [...data];
		});
	});

	onDestroy(() => {
		io.emit('leave-room', 'demo');
	});
</script>

Number of clients connect : <Badge>{socketUsers.length}</Badge>
<Button><a href="http://localhost:3000" target="_blank">Open Another client</a></Button>
<div>
	<Button on:click={closeWindow}>Close Window</Button>
</div>
