<script lang="ts">
    export let text: string = "";
</script>

<div id="intro">
    <p class="editable">{@html text}</p>
</div>

<style lang="scss">
    div {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            width: 55.75%;

            font-size: calc(0.75vh + 1.5vw);
            font-weight: 400;
            text-align: center;
        }
    }
</style>