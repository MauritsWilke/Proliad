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
            display: table;
            height: 5vh;

            #marker {
                height: 100%;
                width: calc(0.4vw + 0.4vh);
                margin-right: 1vw;
                margin-left: 1vw;
            }

            #quote {
                display: table-cell;
                vertical-align: middle;
                font-weight: 300;
                font-size: calc(1vw + 1vh);
            }
        }
    }
    
</style>