<script lang="ts">
	import type { DocumentData } from "firebase/firestore";

	export let contentItems: DocumentData[];
</script>

{#each contentItems as item}
{#key contentItems}
	<div id={item.title} class="{contentItems.indexOf(item) % 2 ? "left" : "right"} contentItem">
		<div id="content">
			<h1>{item.title}</h1>
			<p>{item.text}</p>
		</div>
		<div id="visual">
			<img src={item.imageURL} alt={`${item.title} image`} />
		</div>
	</div>
{/key}
{/each}

<style lang="scss">
	.contentItem {
		margin-left: 2.5%;
		margin-right: 2.5%;
		margin-bottom: calc(3vh + 5vw);
		height: calc(35vh + 12.5vw);

		#content {
			float: left;
			width: calc(50% - 1.25%);
			height: 100%;

			display: flex;
			flex-direction: column;
			justify-content: center;

			h1 {
				font-size: calc((1vw + 1vh) / 0.4375);
				line-height: calc((1vw + 1vh) / 0.5);
				width: 100%;
				z-index: 100;
				margin-bottom: 15px;
			}

			p {
				font-size: calc(1vw + 1vh);
			}
		}

		#visual {
			float: right;
			width: calc(50% - 1.25%);
			height: 100%;

			img {
				width: max(150px, 100%);
				height: 100%;
				object-fit: contain;
				overflow: hidden;
			}
		}
	}

	.left {
		#content {
			float: right;
			text-align: right;
		}

		#visual {
			float: left;
		}
	}
</style>