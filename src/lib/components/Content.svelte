<script lang="ts">
	import type { DocumentData } from "firebase/firestore";
	import { onMount } from "svelte";

	export let contentItems: { [key: string]: DocumentData };
	export let order: string[];
	export let baseURL = "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2F";

	function getURL(assetName: string) {
		return baseURL + assetName + "?alt=media";
	}

	onMount(() => {
		addEventListener("ChangeAssetVersion", () => {
			baseURL = baseURL === "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2F" ? "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets2%2F" : "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2F"
		});
	})
</script>

<div id="contentList">
	{#each order as orderTitle, i (i)}
		<div
			id={orderTitle}
			class="{i % 2 === 0 ? 'right' : 'left'} contentItem"
		>
			<div id="content">
				<h1 class="editable">{@html contentItems[orderTitle].title}</h1>
				<p class="editable">{@html contentItems[orderTitle].text}</p>
			</div>
			<div id="visual">
				{#key baseURL || baseURL}
					<img
						src={getURL(contentItems[orderTitle].assetName)}
						alt={`${contentItems[orderTitle].title} image`}
					/>
				{/key}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">

	#contentList {
		display: grid;
		margin-bottom: 15%;

		.contentItem {
			padding-left: 7.5%;
			padding-right: 7.5%;

			#content {
				height: 100%;
				float: left;
				width: calc(50% - 7.5%);

				display: flex;
				flex-direction: column;
				justify-content: center;

				h1 {
					font-size: calc((1vw + 1vh) / 0.45);
					line-height: calc((1vw + 1vh) / 0.45);
					width: 100%;
					z-index: 100;
					margin-bottom: 1vh;
				}

				p {
					font-size: calc(1vw + 0.75vh);
					z-index: 100;
					height: fit-content;
					padding-bottom: 10vw;
				}
			}

			#visual {
				float: right;
				height: 75%;

				display: grid;
				place-items: center;

				width: calc(50% - 2.5%);
				height: 70%;

				img {
					width: max(150px, 100%);
					height: 100%;
					object-fit: contain;
					overflow: hidden;
				}
			}
		}
	}

	@media (min-width: 800px) {
		#contentList {
			.left {
				#content {
					float: right;
					text-align: right;
				}

				#visual {
					float: left;
				}
			}
		}
	}
</style>
