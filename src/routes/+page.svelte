<script lang="ts">
	import "../global.scss";
	import "./styling.scss";
	import Content from '$lib/components/Content.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Tagline from '$lib/components/Tagline.svelte';
	import Intro from "$lib/components/Intro.svelte";

	import { collection, doc, DocumentReference, onSnapshot, setDoc, updateDoc, type DocumentData } from "firebase/firestore";
	import { auth, firestore } from '$lib/scripts/firebaseControl';
	import { onMount } from "svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Quote from "$lib/components/Quote.svelte";
	import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

	let contentItems: {[key: string]: DocumentData} = { "Kwaliteit": { "title": "Kwaliteit", "text": "Duurzame en langlevende producten maken is de beste manier om minder te produceren. De armaturen die we in onze jonge jaren hebben gemaakt draaien nog steeds in top conditie. Hoge kwaliteit LED-chips functioneren rond 20 jaar. Dankzij ons ontwerp zijn onderdelen die vervangen moeten worden makkelijk te vervangen. Wij kunnen gloei- en halogeen armaturen en lampen ombouwen naar LED. Onze hoge kwaliteit onderdelen zijn onze grootste bijdrage aan het milieu.", "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Flamp.svg?alt=media" }, "Lokale productie": { "text": "Nederlandse productkwaliteit staat hoog aangeschreven in de wereld. We produceren onze led armaturen te Roggel in onze eigen fabriek. Door lokale productie hoeven wij geen voorraad aan te houden, zodra er armaturen worden besteld kunnen wij die meteen produceren. Wij gebruiken aluminium vaak omdat wij deze gemakkelijk kunnen hergebruiken. Door met een vaste groep ZZP’ers voor de productie te werken kunnen we constante kwaliteit bewaken.", "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fwinkel.svg?alt=media", "title": "Lokale productie" }, "Refurbished LED producten": { "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fdozen.svg?alt=media", "text": "Onze LED producten die we 10-15 jaar geleverd hebben zijn nog steeds refurbushbaar. Door de LED en voeding uit te wisselen en mogelijk de optiek aan te passen geef je een 10-15 jaar oude LED nog 10-15 jaar aan levensduur. Proliad refurbished zelfs goede armaturen die we zelf niet geleverd hebben, indien dit product zich ervoor verleent. Het produceren van de behuizing, die voornamelijk bestaat uit aluminium, kost de meeste energie.", "title": "Refurbished LED producten" }, "Verpakken": { "text": "Betreft de verpakking investeren we in bakken die van gerecycled plastic zijn gemaakt. Het blijft onze wel bekende transportbak met statiegeld erop. Het vouwen van dozen is hierdoor verleden tijd. De welbekende doos zullen we altijd blijven recyclen als het kan inclusief het verpakkingsmateriaal. Tevens is er geïnvesteerd in papieren plakband en plastic zakken op mais basis.", "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Frecyclebak.svg?alt=media", "title": "Verpakken" }, "Vervoeren": { "title": "Vervoeren", "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fbusje.svg?alt=media", "text": "Wij proberen onze productie zo lokaal mogelijk te maken, dit is goed voor het milieu en bespaart logistieke kosten. Daar waar dat wel nodig is, zoals bij enkele LED chips of drivers, selecteren wij onze leveranciers mede op hun milieubeleid en maatregelen. Ons eigen transport proberen we zo veel mogelijk elektrisch te doen, recent hebben we gekozen voor een extra aanhanger i.p.v. een extra bus." }, "Huisvesting": { "text": "Proliad heeft geïnvesteerd in een nieuw bedrijfspand dat voorzien is van zonnepanelen om de bedrijfsactiviteiten van stroom te voorzien, verder hebben we een warmtepomp geïnstalleerd om het geheel te verwarmen. Proliad zal groen blijven produceren en altijd zijn best doen om stap voor stap de wereld groener te maken.", "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fhuisvesting.svg?alt=media", "title": "Huisvesting" } };
	let other: DocumentData = { title: "Proliad Milleu", "intro": "We stellen hoge eisen aan onze leveranciers en partners zodat u kunt profiteren van het beste op de markt. Wij maken gebruik van de hoogste kwaliteit aluminium, de beste Led-chips en de nieuwste drivers. We communiceren direct met lichtontwerpers en architecten, hieruit produceren en assembleren we onze producten zelf. Verder houden wij ons actief bezig met het tegenhouden van lichtvervuiling. We doen bijvoorbeeld mee aan projecten om ’s nachts minder openbare verlichting aan te hebben staan.", "logoURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Flogo.png?alt=media", "globeURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fwereldbol.png?alt=media", "tagline": "Lokaal produceren en de beste kwaliteit garanderen. Proliad vindt het belangrijk om lokaal te produceren, te innoveren en te verbeteren.", "order": [ "Kwaliteit", "Lokale productie", "Refurbished LED producten", "Verpakken", "Vervoeren", "Huisvesting" ] };
	let footerData: DocumentData = { title: "Contact", name: "PROLIAD LED LIGHTING", address: "Vrijkenstraat 18, 6088 PA, Roggel", email: "info@proliad.com", phone: "+31 (0)4 75 44 44 20"};
	onMount(async () => {
		contentItems = JSON.parse(localStorage.getItem("contentItems") ?? "{}") ?? contentItems;
		other = JSON.parse(localStorage.getItem("other") ?? "{}") ?? other;
		footerData = JSON.parse(localStorage.getItem("footerData") ?? "{}") ?? footerData;

		onSnapshot(collection(firestore, "/content"), (items) => {
			items.forEach((item) => {
				if (item.id === "other") {
					other = item.data();
				}
			});
			
			items.forEach((item) => {
				if (item.id === "footerData") {
					footerData = item.data();
					return
				}
				contentItems[item.id] = item.data();
			});

			localStorage.setItem("contentItems", JSON.stringify(contentItems));
			localStorage.setItem("other", JSON.stringify(other));
			localStorage.setItem("footerData", JSON.stringify(footerData));
		});

		const keysDown = new Set();

		const wrapper = document.getElementById("wrapper")

		addEventListener("keydown", async (event) => {
			if (event.key == "F2") {
				event.preventDefault();

				if (!auth.currentUser) await signInWithPopup(auth, new GoogleAuthProvider())
				const user = auth.currentUser;
				
				if (!user) return;
				wrapper?.childNodes.forEach((node) => {
					if (node instanceof HTMLElement) {
						node.childNodes.forEach((child) => {
							if (child instanceof HTMLElement) {
								makeEditable(child)
								child.childNodes.forEach((grandChild) => {
									if (grandChild instanceof HTMLElement) {
										makeEditable(grandChild)

										grandChild.childNodes.forEach((greatGrandChild) => {
											if (greatGrandChild instanceof HTMLElement) {
												makeEditable(greatGrandChild)
											}
										});
									}
								});
							}
						});
					}
				});
			}
		});

		function makeEditable(element: HTMLElement, editable: boolean = true) {
			if (element.classList.contains("editable")) element.contentEditable = `${editable}`;			
		}

		let editable = false;

		const toChange = []
		const changedElements: Set<Event> = new Set();

		addEventListener("keydown", (event) => {
			keysDown.add(event.key);

			if (keysDown.has("Control") && keysDown.has("s")) {
				event.preventDefault();

				changedElements.forEach(e => {
					if (["p"].includes(e.srcElement?.localName)) {
						if (e.srcElement.parentNode.id === "content") updateDoc(doc(firestore, "content", e.srcElement?.parentNode.parentNode.id), {"text": e.srcElement?.innerText})
						else if (e.srcElement.parentNode.id === "intro") updateDoc(doc(firestore, "content/other"), {"intro": e.srcElement?.innerText})
						else if (e.srcElement.parentNode.id === "tagline") updateDoc(doc(firestore, "content/other"), {"tagline": e.srcElement?.innerText})
						else if (e.srcElement.parentNode.id === "content") updateDoc(doc(firestore, "content", e.srcElement?.parentNode.parentNode.id), {"title": e.srcElement?.innerText})
						else if (e.srcElement.parentNode.id === "footer") updateDoc(doc(firestore, "content/footerData"),  {[e.srcElement?.id]: e.srcElement?.innerText})
						else if (e.srcElement.parentNode.id === "contact") updateDoc(doc(firestore, "content/footerData"),  {[e.srcElement?.id]: e.srcElement?.innerText})
						else if (e.srcElement.parentNode.id === "socials") updateDoc(doc(firestore, "content/footerData"),  {[e.srcElement?.id]: e.srcElement?.innerText})
					} else if (["h1"].includes(e.srcElement?.localName)) {
						if (e.srcElement.parentNode.id === "content") updateDoc(doc(firestore, "content", e.srcElement?.parentNode.parentNode.id), {"title": e.srcElement?.innerText})
						else if (e.srcElement.parentNode.id === "footer") updateDoc(doc(firestore, "content/footerData"), {"title": e.srcElement?.innerText})
					} else {
						if (e.srcElement.parentNode.id === "content") updateDoc(doc(firestore, "content", e.srcElement?.parentNode.parentNode.id), {"title": e.srcElement?.innerText})
						else if (e.srcElement.parentNode.id === "footer") updateDoc(doc(firestore, "content/footerData"),  {[e.srcElement?.id]: e.srcElement?.innerText})
						else if (e.srcElement.parentNode.id === "contact") updateDoc(doc(firestore, "content/footerData"),  {[e.srcElement?.id]: e.srcElement?.innerText})
						else if (e.srcElement.parentNode.id === "socials") updateDoc(doc(firestore, "content/footerData"),  {[e.srcElement?.id]: e.srcElement?.innerText})
						else updateDoc(doc(firestore, "content/other"), {[e.srcElement?.id]: e.srcElement?.innerText})
					}
				});

				toChange.length = 0;

				wrapper?.childNodes.forEach((node) => {
					if (node instanceof HTMLElement) {
						node.childNodes.forEach((child) => {
							if (child instanceof HTMLElement) {
								makeEditable(child, false)
								child.childNodes.forEach((grandChild) => {
									if (grandChild instanceof HTMLElement) {
										makeEditable(grandChild, false)

										grandChild.childNodes.forEach((greatGrandChild) => {
											if (greatGrandChild instanceof HTMLElement) {
												makeEditable(greatGrandChild, false)
											}
											
											greatGrandChild.childNodes.forEach((greatGreatGrandChild) => {
												if (greatGreatGrandChild instanceof HTMLElement) {
													makeEditable(greatGreatGrandChild, false)
												}
											});
										});
									}
								});
							}
						});
					}
				});
			}
		});

		addEventListener("input", (e) => {
			console.log(e)
			changedElements.add(e)
		});

		addEventListener("keyup", (event) => {
			keysDown.delete(event.key);
		});
	});
</script>

<div id="wrapper">
	<title>{other.title}</title>
	<Navbar logoURL={other?.logoURL ?? "/logo.png"} />
	<img id="wereldbol" src={other.globeURL ?? "/wereldbol.png"} alt="wereldbol" />
	<Tagline text={other.tagline ?? ""} />
	<img id="Leaf" src={other.leaf ?? "/blaadje.svg"} alt="Blad" />
	<Intro text={other.intro  ?? ""} />
	<Quote text={other.quote ?? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm"} color={other.quoteColor ?? "#069747"} />
	<Content {contentItems} order={other.order} />
	<Footer footerData={footerData} />
</div>