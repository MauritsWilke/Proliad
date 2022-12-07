<script lang="ts">
    export let text: string;
    export let color: string;
</script>

<div id="wrapper">
    <div id="quote">
        <div id="marker" style="background-color: {color}" />
        <p id="text" style="color: {color}">{text}</p>
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

        #quote {
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

            #text {
                padding-left: 0.7vw;
                font-weight: 300;
                font-size: calc(1vw + 1vh);
            }
        }
    }
    
</style>