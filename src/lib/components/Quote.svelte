<script lang="ts">
    export let text: string;
    export let color: string;
</script>

<div id="wrapper">
    <div id="quoteMain">
        <div id="marker" style="background-color: {color}" />
        <h2 class="editable" id="quote" style="color: {color}">{@html text}</h2>
    </div>
</div>

<style lang="scss">
    #wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        max-width: 75vw;
        margin-left: auto;
        margin-right: auto;

        margin-top: calc(2vh + 2vw);
        padding-bottom: calc(2vh + 2vw);

        #quoteMain {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 5vh;

            #marker {
                display: inline-block;
                vertical-align: middle;
                height: 5vh;
                width: calc(0.2vw + 0.2vh);
            }

            #quote {
                display: table-cell;
                vertical-align: middle;
            }
        }
    }
</style>