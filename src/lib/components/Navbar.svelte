<script lang="ts">
	export let logoURL: string;
</script>

<div id="navbar">
	<img src={logoURL} alt="logo" />
</div>

<style lang="scss">
	#navbar {
		margin: 2vw;

		img {
			height: 2vw;
		}
	}
</style>
