<script lang="ts">
    export let logoURL: string;
</script>

<div id="navbar">
    <img src={logoURL} alt="logo" />
</div>

<style lang="scss">
    #navbar {
        margin-left: calc(2vw + 1vh);
        margin-top: calc(2vw + 1vh);
        margin-bottom: calc(4vw + 2vh);

        img {
            height: calc(3vh + 3vw);
        }
    }
</style>