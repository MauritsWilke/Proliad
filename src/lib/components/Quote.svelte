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

<<<<<<< HEAD
        #quoteMain {
            display: table;
=======
        #quote {
            display: flex;
            align-items: center;
            justify-content: center;
>>>>>>> a2f765f71a44cd07fae619a8c3e5729af15537c4
            height: 5vh;

            #marker {
                display: inline-block;
                vertical-align: middle;
                height: 5vh;
                width: calc(0.2vw + 0.2vh);
            }

<<<<<<< HEAD
            #quote {
                display: table-cell;
                vertical-align: middle;
=======
            #text {
                padding-left: 0.7vw;
>>>>>>> a2f765f71a44cd07fae619a8c3e5729af15537c4
                font-weight: 300;
                font-size: calc(1vw + 1vh);
            }
        }
    }
    
</style>