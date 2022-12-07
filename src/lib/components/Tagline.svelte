<script lang="ts">
    export let text: string;
</script>

<div id="tagline">
	<p>
		<span>{text.charAt(0)}</span>{text.slice(1)}
	</p>
</div>

<style lang="scss">
    #tagline {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            width: calc(55.75%);
            font-size: calc(0.5vh + 1.25vw);
            font-weight: 400;
            margin-bottom: calc(1vh + 1vw);

            span {
                font-size: calc(2vh + 2vw);
                font-weight: 600;
            }
        }
    }
</style>