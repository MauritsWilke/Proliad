<div class="contentItem">
	<div id="content">
		<h1>Title</h1>
		<p>Text</p>
	</div>
	<div id="visual">
		<img src="/huisvesting.svg" alt={`image`} />
	</div>
</div>

<style lang="scss">
    .contentItem {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        height: calc(35vh + 12.5vw);

        #content {
            background-color: red;
            height: 200%;
            shape-outside: circle(50%);
        }

        #visual {
            display: none;
            background-color: blue;
            height: 100%;
            
            img {
                max-width: 100%;
            }
        }
    }
</style>