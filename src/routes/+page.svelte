<script lang="ts">
	import "../global.scss";
	import "./styling.scss";
	import Content from '$lib/components/Content.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Tagline from '$lib/components/Tagline.svelte';
	import Intro from "$lib/components/Intro.svelte";

	import { collection, onSnapshot, type DocumentData } from "firebase/firestore";

	import { firestore } from '$lib/scripts/firebaseControl';

	let contentItems: DocumentData[] = [];

	let tagline = "";
	let intro = "";

	onSnapshot(collection(firestore, "/content"), (items) => {
		let newContents: DocumentData[] = [];

		let metadata: DocumentData = {};

		items.forEach((item) => {
			if (item.id === "metadata") {
				metadata = item.data();
			}
		});
		
		items.forEach((item) => {
			if (item.id === "metadata") return;
			if (item.id === "other") {
				tagline = item.data().tagline
				intro = item.data().intro
				return;
			};
			newContents[metadata.order.indexOf(item.id)] = item.data();
		});
		contentItems = newContents;
	});
</script>

{#if contentItems}
	<div id="wrapper">
		<Navbar />
		<img id="wereldbol" src="/Wereldbol.svg" alt="Wereldbol" />
		<Tagline text={tagline} />
		<Intro text={intro} />
		<Content {contentItems} />
	</div>
{/if}

<style lang="scss">
</style>