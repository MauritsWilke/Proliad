<script lang="ts">
	export let title: string;
	export let text: string;
	export let imageURL: string;
	export let alignment: "left" | "right" = "right";
</script>

<div id={title} class="{alignment} contentItem">
	<div id="content">
		<h1>{title}</h1>
		<p>{text}</p>
	</div>
	<div id="visual">
		<img src={imageURL} alt={`${title} image`} />
	</div>
</div>

<style lang="scss">
	.contentItem {
		margin-left: 2.5%;
		margin-right: 2.5%;
		margin-bottom: max(2.5%, 2.5vw);
		
		height: calc(45vh + 12.5vw);

		#content {
			float: left;
			width: 50%;
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

	.left {
		#content {
			float: right;
		}

		#visual {
			float: left;
		}
	}
</style>