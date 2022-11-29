import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
const global = "";
const Content_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");.svelte-1qlw6ya.svelte-1qlw6ya{padding:0;margin:0;font-family:"Poppins", "sans-serif";background-color:#E5E5E5}.contentItem.svelte-1qlw6ya.svelte-1qlw6ya{margin-left:2.5%;margin-right:2.5%;margin-bottom:calc(3vh + 5vw);height:calc(35vh + 12.5vw)}.contentItem.svelte-1qlw6ya #content.svelte-1qlw6ya{float:left;width:48.75%;height:100%;display:flex;flex-direction:column;justify-content:center}.contentItem.svelte-1qlw6ya #content h1.svelte-1qlw6ya{font-size:calc((1vw + 1vh) / 0.4375);line-height:calc((1vw + 1vh) / 0.5);width:100%;z-index:100;margin-bottom:15px}.contentItem.svelte-1qlw6ya #content p.svelte-1qlw6ya{font-size:calc(1vw + 1vh)}.contentItem.svelte-1qlw6ya #visual.svelte-1qlw6ya{float:right;width:48.75%;height:100%}.contentItem.svelte-1qlw6ya #visual img.svelte-1qlw6ya{width:max(150px, 100%);height:100%;object-fit:contain;overflow:hidden}.left.svelte-1qlw6ya #content.svelte-1qlw6ya{float:right;text-align:right}.left.svelte-1qlw6ya #visual.svelte-1qlw6ya{float:left}',
  map: null
};
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { text } = $$props;
  let { imageURL } = $$props;
  let { alignment = "right" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.imageURL === void 0 && $$bindings.imageURL && imageURL !== void 0)
    $$bindings.imageURL(imageURL);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  $$result.css.add(css$4);
  return `<div${add_attribute("id", title, 0)} class="${escape(alignment, true) + " contentItem svelte-1qlw6ya"}"><div id="${"content"}" class="${"svelte-1qlw6ya"}"><h1 class="${"svelte-1qlw6ya"}">${escape(title)}</h1>
		<p class="${"svelte-1qlw6ya"}">${escape(text)}</p></div>
	<div id="${"visual"}" class="${"svelte-1qlw6ya"}"><img${add_attribute("src", imageURL, 0)}${add_attribute("alt", `${title} image`, 0)} class="${"svelte-1qlw6ya"}"></div>
</div>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");.svelte-sh03s4.svelte-sh03s4{padding:0;margin:0;font-family:"Poppins", "sans-serif";background-color:#E5E5E5}#navbar.svelte-sh03s4.svelte-sh03s4{margin-left:calc(2vw + 1vh);margin-top:calc(2vw + 1vh);margin-bottom:calc(4vw + 2vh)}#navbar.svelte-sh03s4 img.svelte-sh03s4{height:calc(3vh + 3vw)}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div id="${"navbar"}" class="${"svelte-sh03s4"}"><img src="${"logo.png"}" alt="${"logo"}" class="${"svelte-sh03s4"}">
</div>`;
});
const Tagline_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");.svelte-jl8m6r.svelte-jl8m6r{padding:0;margin:0;font-family:"Poppins", "sans-serif";background-color:#E5E5E5}#tagline.svelte-jl8m6r.svelte-jl8m6r{display:flex;justify-content:center;align-items:center}#tagline.svelte-jl8m6r p.svelte-jl8m6r{width:55.75%;font-size:calc(0.5vh + 1.25vw);font-weight:400;margin-bottom:calc(5vh + 5vw)}#tagline.svelte-jl8m6r p span.svelte-jl8m6r{font-size:calc(2vh + 2vw);font-weight:600}',
  map: null
};
const Tagline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div id="${"tagline"}" class="${"svelte-jl8m6r"}"><p class="${"svelte-jl8m6r"}"><span class="${"svelte-jl8m6r"}">L</span>okaal produceren en de beste kwaliteit garanderen. <br class="${"svelte-jl8m6r"}"> Proliad
		vindt het belangrijk om lokaal te produceren, te innoveren en te verbeteren.
	</p>
</div>`;
});
const Intro_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");.svelte-16yqq1k.svelte-16yqq1k{padding:0;margin:0;font-family:"Poppins", "sans-serif";background-color:#E5E5E5}div.svelte-16yqq1k.svelte-16yqq1k{display:flex;justify-content:center;align-items:center}div.svelte-16yqq1k p.svelte-16yqq1k{width:55.75%;font-size:calc(0.5vh + 1.25vw);font-weight:400;margin-bottom:calc(5vh + 5vw);text-align:center}',
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"svelte-16yqq1k"}"><p class="${"svelte-16yqq1k"}">Wij stellen hoge eisen aan onze leveranciers en partners zodat u kunt profiteren van het beste op de markt. Wij maken gebruik van de hoogste kwaliteit aluminium, de beste Led-chips en de nieuwste drivers. We communiceren direct met lichtontwerpers en architecten, hieruit produceren en assembleren we onze producten zelf. Verder houden wij ons actief bezig met het tegenhouden van lichtvervuiling. We doen bijvoorbeeld mee aan projecten om \u2019s nachts minder openbare verlichting aan te hebben staan.
    </p>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");.svelte-zag7za.svelte-zag7za{padding:0;margin:0;font-family:"Poppins", "sans-serif";background-color:#E5E5E5}#wrapper.svelte-zag7za.svelte-zag7za{height:100vh;width:100vw;overflow-x:hidden}#wrapper.svelte-zag7za #wereldbol.svelte-zag7za{width:100%;margin-bottom:calc(1vh + 1vw)}.svelte-zag7za.svelte-zag7za::-webkit-scrollbar{width:1vw;display:block}.svelte-zag7za.svelte-zag7za::-webkit-scrollbar-track{background:#f1f1f1}.svelte-zag7za.svelte-zag7za::-webkit-scrollbar-thumb{background:#888}.svelte-zag7za.svelte-zag7za::-webkit-scrollbar-thumb:hover{background:#555}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"wrapper"}" class="${"svelte-zag7za"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	<img id="${"wereldbol"}" src="${"/Wereldbol.png"}" alt="${"Wereldbol"}" class="${"svelte-zag7za"}">
	${validate_component(Tagline, "Tagline").$$render($$result, {}, {}, {})}
	${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})}
	${validate_component(Content, "Content").$$render(
    $$result,
    {
      title: "Kwaliteit",
      text: "Duurzame en langlevende producten maken is de beste manier om minder te produceren. De armaturen die we in onze jonge jaren hebben gemaakt draaien nog steeds in top conditie. Hoge kwaliteit LED-chips functioneren rond 20 jaar. Dankzij ons ontwerp zijn onderdelen die vervangen moeten worden makkelijk te vervangen. Wij kunnen gloei- en halogeen armaturen en lampen ombouwen naar LED. Onze hoge kwaliteit onderdelen zijn onze grootste bijdrage aan het milieu.",
      imageURL: "/lamp.png"
    },
    {},
    {}
  )}
	${validate_component(Content, "Content").$$render(
    $$result,
    {
      alignment: "left",
      title: "Lokale productie",
      text: "Nederlandse productkwaliteit staat hoog aangeschreven in de wereld. We produceren onze led armaturen te Roggel in onze eigen fabriek.  Door lokale productie hoeven wij geen voorraad aan te houden, zodra er armaturen worden besteld kunnen wij die meteen produceren. Wij gebruiken aluminium vaak omdat wij deze gemakkelijk kunnen hergebruiken. Door met een vaste groep ZZP\u2019ers voor de productie te werken kunnen we constante kwaliteit bewaken.",
      imageURL: "/winkel.png"
    },
    {},
    {}
  )}
	${validate_component(Content, "Content").$$render(
    $$result,
    {
      title: "Refurbished LED producten",
      text: "Onze LED producten die we 10-15 jaar geleverd hebben zijn nog steeds refurbushbaar. Door de LED en voeding uit te wisselen en mogelijk de optiek aan te passen geef je een 10-15 jaar oude LED nog 10-15 jaar aan levensduur. Proliad refurbished zelfs goede armaturen die we zelf niet geleverd hebben, indien dit product zich ervoor verleent. Het produceren van de behuizing, die voornamelijk bestaat uit aluminium, kost de meeste energie.",
      imageURL: "/recyclebak.png"
    },
    {},
    {}
  )}
	${validate_component(Content, "Content").$$render(
    $$result,
    {
      alignment: "left",
      title: "Verpakken",
      text: "Betreft de verpakking investeren we in bakken die van gerecycled plastic zijn gemaakt. Het blijft onze wel bekende transportbak met statiegeld erop. Het vouwen van dozen is hierdoor verleden tijd. De welbekende doos zullen we altijd blijven recyclen als het kan inclusief het verpakkingsmateriaal. Tevens is er ge\xEFnvesteerd in papieren plakband en plastic zakken op mais basis.",
      imageURL: "/dozen.png"
    },
    {},
    {}
  )}
	${validate_component(Content, "Content").$$render(
    $$result,
    {
      title: "Vervoeren",
      text: "Wij proberen onze productie zo lokaal mogelijk te maken, dit is goed voor het milieu en bespaart logistieke kosten. Daar waar dat wel nodig is, zoals bij enkele LED chips of drivers, selecteren wij onze leveranciers mede op hun milieubeleid en maatregelen. Ons eigen transport proberen we zo veel mogelijk elektrisch te doen, recent hebben we gekozen voor een extra aanhanger i.p.v. een extra bus.",
      imageURL: "/busje.png"
    },
    {},
    {}
  )}
	${validate_component(Content, "Content").$$render(
    $$result,
    {
      alignment: "left",
      title: "Huisvesting",
      text: "Proliad heeft ge\xEFnvesteerd in een nieuw bedrijfspand dat voorzien is van zonnepanelen om de bedrijfsactiviteiten van stroom te voorzien, verder hebben we een warmtepomp ge\xEFnstalleerd om het geheel te verwarmen. Proliad zal groen blijven produceren en altijd zijn best doen om stap voor stap de wereld groener te maken.",
      imageURL: "huisvesting.png"
    },
    {},
    {}
  )}
</div>`;
});
export {
  Page as default
};
