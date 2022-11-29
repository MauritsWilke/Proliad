<script lang="ts">
	import "../global.scss";
	import "./styling.scss";

	import Content from '$lib/components/Content.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Tagline from '$lib/components/Tagline.svelte';
	import Intro from "$lib/components/Intro.svelte";

	const contentItems = [
		{
			"title": "Kwaliteit",
			"text": "Duurzame en langlevende producten maken is de beste manier om minder te produceren. De armaturen die we in onze jonge jaren hebben gemaakt draaien nog steeds in top conditie. Hoge kwaliteit LED-chips functioneren rond 20 jaar. Dankzij ons ontwerp zijn onderdelen die vervangen moeten worden makkelijk te vervangen. Wij kunnen gloei- en halogeen armaturen en lampen ombouwen naar LED. Onze hoge kwaliteit onderdelen zijn onze grootste bijdrage aan het milieu.",
			"imageURL": "/lamp.svg"
		},
		{
			"title": "Lokale productie",
			"text": "Nederlandse productkwaliteit staat hoog aangeschreven in de wereld. We produceren onze led armaturen te Roggel in onze eigen fabriek. Door lokale productie hoeven wij geen voorraad aan te houden, zodra er armaturen worden besteld kunnen wij die meteen produceren. Wij gebruiken aluminium vaak omdat wij deze gemakkelijk kunnen hergebruiken. Door met een vaste groep ZZP’ers voor de productie te werken kunnen we constante kwaliteit bewaken.",
			"imageURL": "/winkel.svg"
		},
		{
			"title": "Refurbished LED producten",
			"text": "Onze LED producten die we 10-15 jaar geleverd hebben zijn nog steeds refurbushbaar. Door de LED en voeding uit te wisselen en mogelijk de optiek aan te passen geef je een 10-15 jaar oude LED nog 10-15 jaar aan levensduur. Proliad refurbished zelfs goede armaturen die we zelf niet geleverd hebben, indien dit product zich ervoor verleent. Het produceren van de behuizing, die voornamelijk bestaat uit aluminium, kost de meeste energie.",
			"imageURL": "/dozen.svg"
		},
		{
			"title": "Verpakken",
			"text": "Betreft de verpakking investeren we in bakken die van gerecycled plastic zijn gemaakt. Het blijft onze wel bekende transportbak met statiegeld erop. Het vouwen van dozen is hierdoor verleden tijd. De welbekende doos zullen we altijd blijven recyclen als het kan inclusief het verpakkingsmateriaal. Tevens is er geïnvesteerd in papieren plakband en plastic zakken op mais basis.",
			"imageURL": "/recyclebak.svg"
		},
		{
			"title": "Vervoeren",
			"text": "Wij proberen onze productie zo lokaal mogelijk te maken, dit is goed voor het milieu en bespaart logistieke kosten. Daar waar dat wel nodig is, zoals bij enkele LED chips of drivers, selecteren wij onze leveranciers mede op hun milieubeleid en maatregelen. Ons eigen transport proberen we zo veel mogelijk elektrisch te doen, recent hebben we gekozen voor een extra aanhanger i.p.v. een extra bus.",
			"imageURL": "/busje.svg"
		},
		{
			"title": "Huisvesting",
			"text": "Proliad heeft geïnvesteerd in een nieuw bedrijfspand dat voorzien is van zonnepanelen om de bedrijfsactiviteiten van stroom te voorzien, verder hebben we een warmtepomp geïnstalleerd om het geheel te verwarmen. Proliad zal groen blijven produceren en altijd zijn best doen om stap voor stap de wereld groener te maken.",
			"imageURL": "/huisvesting.svg"
		},
	]
</script>

<div id="wrapper">
	<Navbar />
	<img id="wereldbol" src="/Wereldbol.svg" alt="Wereldbol" />
	<Tagline />
	<Intro />
	{#each contentItems as item}
		<Content title={item.title} text={item.text} imageURL={item.imageURL} alignment={contentItems.indexOf(item) % 2 ? "left" : "right"} />
	{/each}
</div>

<style lang="scss">
</style>