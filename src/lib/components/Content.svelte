<script lang="ts">
	export let title: string;
	export let text: string;
	export let imageURL: string;
	export let alignment: "left" | "right" = "right";
</script>

<div id={title} class={alignment}>
	<div id="content">
		<h1>{title}</h1>
		<p>{text}</p>
	</div>
	<div id="visual">
		<img src={imageURL} alt={`${title} image`} />
	</div>
</div>

<style lang="scss">
	.right {
		margin-left: 5%;
		margin-right: 5%;
		
		height: 55vh;

		font-family: "Poppins", "sans-serif";

		#content {
			float: left;
			width: 55%;

			h1 {
				font-size: calc((1.3vw + 1vh) / 0.4375);
			}

			p {
				font-size: calc(1.3vw + 1vh);
			}
		}

		#visual {
			float: right;
			width: 45%;
			height: 100%;
			background-color: yellow;

			img {
				width: 100%;
			}
		}

		background-color: blue;
	}
</style>