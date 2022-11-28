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
		margin-top: 3%;
		
		height: 55vh;

		font-family: "Poppins", "sans-serif";

		#content {
			float: left;
			width: 50%;
			height: 100%;

			h1 {
				font-size: calc((1vw + 1vh) / 0.4375);
			}

			p {
				font-size: calc(1vw + 1vh);
			}
		}

		#visual {
			float: right;
			width: 50%;
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
		background-color: red;
		#content {
			float: right;
			background-color: blue;
		}

		#visual {
			background-color: yellow;
			float: left;
		}
	}
</style>