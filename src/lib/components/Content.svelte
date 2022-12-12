<script lang="ts">
	import type { DocumentData } from "firebase/firestore";

	export let contentItems: { [key: string]: DocumentData };
	export let order: string[];

	console.log(contentItems)
</script>

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
			<img
				src={contentItems[orderTitle].imageURL}
				alt={`${contentItems[orderTitle].title} image`}
			/>
		</div>
	</div>
{/each}

<style lang="scss">
	.contentItem {
		margin-left: 7.5%;
		margin-right: 7.5%;
		margin-top: 75px;
		margin-bottom: calc(150px + 5vw);
		height: calc(10vh + 15vw);

		#content {
			float: left;
			width: calc(50% - 2.5%);
			height: 100%;

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
			}
		}

		#visual {
			float: right;

			display: grid;
			place-items: center;

			width: calc(50% - 2.5%);
			height: 100%;

			img {
				width: max(150px, 100%);
				height: 100%;
				object-fit: contain;
				overflow: hidden;
			}
		}
	}

	@media (min-width: 800px) {
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
</style>
