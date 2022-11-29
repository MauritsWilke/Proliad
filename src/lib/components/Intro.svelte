<script lang="ts">
    export let text: string = "";
</script>

<div>
    <p>{text}</p>
</div>

<style lang="scss">
    div {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            width: calc(55.75%);

            font-size: calc(0.5vh + 1.25vw);
            font-weight: 400;

            margin-bottom: calc(5vh + 5vw);
            text-align: center;
        }
    }
</style>