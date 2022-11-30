import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const global = "";
const styling = "";
const Content_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");.svelte-y5pj8v.svelte-y5pj8v{padding:0;margin:0;font-family:"Poppins", "sans-serif";background-color:#E5E5E5}.contentItem.svelte-y5pj8v.svelte-y5pj8v{margin-left:2.5%;margin-right:2.5%;margin-top:75px;margin-bottom:100px;height:calc(10vh + 15vw)}.contentItem.svelte-y5pj8v #content.svelte-y5pj8v{float:left;width:47.5%;height:100%;display:flex;flex-direction:column;justify-content:center}.contentItem.svelte-y5pj8v #content h1.svelte-y5pj8v{font-size:calc((1vw + 1vh) / 0.45);line-height:calc((1vw + 1vh) / 0.45);width:100%;z-index:100;margin-bottom:15px}.contentItem.svelte-y5pj8v #content p.svelte-y5pj8v{font-size:calc(1vw + 0.75vh);z-index:100}.contentItem.svelte-y5pj8v #visual.svelte-y5pj8v{float:right;width:47.5%;height:100%}.contentItem.svelte-y5pj8v #visual img.svelte-y5pj8v{width:max(150px, 100%);height:100%;object-fit:contain;overflow:hidden}.left.svelte-y5pj8v #content.svelte-y5pj8v{float:right;text-align:right}.left.svelte-y5pj8v #visual.svelte-y5pj8v{float:left}',
  map: null
};
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contentItems } = $$props;
  let { order } = $$props;
  if ($$props.contentItems === void 0 && $$bindings.contentItems && contentItems !== void 0)
    $$bindings.contentItems(contentItems);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  $$result.css.add(css$4);
  return `${each(order, (orderTitle, i) => {
    return `<div${add_attribute("id", contentItems[orderTitle].title, 0)} class="${escape(i % 2 === 0 ? "right" : "left", true) + " contentItem svelte-y5pj8v"}"><div id="${"content"}" class="${"svelte-y5pj8v"}"><h1 class="${"svelte-y5pj8v"}">${escape(contentItems[orderTitle].title)}</h1>
			<p class="${"svelte-y5pj8v"}">${escape(contentItems[orderTitle].text)}</p></div>
		<div id="${"visual"}" class="${"svelte-y5pj8v"}"><img${add_attribute("src", contentItems[orderTitle].imageURL, 0)}${add_attribute("alt", `${contentItems[orderTitle].title} image`, 0)} class="${"svelte-y5pj8v"}"></div>
	</div>`;
  })}`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");.svelte-sh03s4.svelte-sh03s4{padding:0;margin:0;font-family:"Poppins", "sans-serif";background-color:#E5E5E5}#navbar.svelte-sh03s4.svelte-sh03s4{margin-left:calc(2vw + 1vh);margin-top:calc(2vw + 1vh);margin-bottom:calc(4vw + 2vh)}#navbar.svelte-sh03s4 img.svelte-sh03s4{height:calc(3vh + 3vw)}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { logoURL } = $$props;
  if ($$props.logoURL === void 0 && $$bindings.logoURL && logoURL !== void 0)
    $$bindings.logoURL(logoURL);
  $$result.css.add(css$3);
  return `<div id="${"navbar"}" class="${"svelte-sh03s4"}"><img${add_attribute("src", logoURL, 0)} alt="${"logo"}" class="${"svelte-sh03s4"}">
</div>`;
});
const Tagline_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");.svelte-jl8m6r.svelte-jl8m6r{padding:0;margin:0;font-family:"Poppins", "sans-serif";background-color:#E5E5E5}#tagline.svelte-jl8m6r.svelte-jl8m6r{display:flex;justify-content:center;align-items:center}#tagline.svelte-jl8m6r p.svelte-jl8m6r{width:55.75%;font-size:calc(0.5vh + 1.25vw);font-weight:400;margin-bottom:calc(5vh + 5vw)}#tagline.svelte-jl8m6r p span.svelte-jl8m6r{font-size:calc(2vh + 2vw);font-weight:600}',
  map: null
};
const Tagline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  return `<div id="${"tagline"}" class="${"svelte-jl8m6r"}"><p class="${"svelte-jl8m6r"}"><span class="${"svelte-jl8m6r"}">${escape(text.charAt(0))}</span>${escape(text.slice(1))}</p>
</div>`;
});
const Intro_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");.svelte-16yqq1k.svelte-16yqq1k{padding:0;margin:0;font-family:"Poppins", "sans-serif";background-color:#E5E5E5}div.svelte-16yqq1k.svelte-16yqq1k{display:flex;justify-content:center;align-items:center}div.svelte-16yqq1k p.svelte-16yqq1k{width:55.75%;font-size:calc(0.5vh + 1.25vw);font-weight:400;margin-bottom:calc(5vh + 5vw);text-align:center}',
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$1);
  return `<div class="${"svelte-16yqq1k"}"><p class="${"svelte-16yqq1k"}">${escape(text)}</p>
</div>`;
});
const firebaseConfig = {
  apiKey: "AIzaSyDnxLOA12YzbIr6N6wC8huHlgz6KhmnfBo",
  authDomain: "proliad.firebaseapp.com",
  projectId: "proliad",
  storageBucket: "proliad.appspot.com",
  messagingSenderId: "567236594018",
  appId: "1:567236594018:web:8cd59aebac8c30b43dc43b",
  measurementId: "G-N5PVGP46E4"
};
const app = initializeApp(firebaseConfig);
getFirestore(app);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");.svelte-1dktguy{padding:0;margin:0;font-family:"Poppins", "sans-serif";background-color:#E5E5E5}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contentItems = {
    "Kwaliteit": {
      "title": "Kwaliteit",
      "text": "Duurzame en langlevende producten maken is de beste manier om minder te produceren. De armaturen die we in onze jonge jaren hebben gemaakt draaien nog steeds in top conditie. Hoge kwaliteit LED-chips functioneren rond 20 jaar. Dankzij ons ontwerp zijn onderdelen die vervangen moeten worden makkelijk te vervangen. Wij kunnen gloei- en halogeen armaturen en lampen ombouwen naar LED. Onze hoge kwaliteit onderdelen zijn onze grootste bijdrage aan het milieu.",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Flamp.svg?alt=media"
    },
    "Lokale productie": {
      "text": "Nederlandse productkwaliteit staat hoog aangeschreven in de wereld. We produceren onze led armaturen te Roggel in onze eigen fabriek. Door lokale productie hoeven wij geen voorraad aan te houden, zodra er armaturen worden besteld kunnen wij die meteen produceren. Wij gebruiken aluminium vaak omdat wij deze gemakkelijk kunnen hergebruiken. Door met een vaste groep ZZP\u2019ers voor de productie te werken kunnen we constante kwaliteit bewaken.",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fwinkel.svg?alt=media",
      "title": "Lokale productie"
    },
    "Refurbished LED producten": {
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fdozen.svg?alt=media",
      "text": "Onze LED producten die we 10-15 jaar geleverd hebben zijn nog steeds refurbushbaar. Door de LED en voeding uit te wisselen en mogelijk de optiek aan te passen geef je een 10-15 jaar oude LED nog 10-15 jaar aan levensduur. Proliad refurbished zelfs goede armaturen die we zelf niet geleverd hebben, indien dit product zich ervoor verleent. Het produceren van de behuizing, die voornamelijk bestaat uit aluminium, kost de meeste energie.",
      "title": "Refurbished LED producten"
    },
    "Verpakken": {
      "text": "Betreft de verpakking investeren we in bakken die van gerecycled plastic zijn gemaakt. Het blijft onze wel bekende transportbak met statiegeld erop. Het vouwen van dozen is hierdoor verleden tijd. De welbekende doos zullen we altijd blijven recyclen als het kan inclusief het verpakkingsmateriaal. Tevens is er ge\xEFnvesteerd in papieren plakband en plastic zakken op mais basis.",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Frecyclebak.svg?alt=media",
      "title": "Verpakken"
    },
    "Vervoeren": {
      "title": "Vervoeren",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fbusje.svg?alt=media",
      "text": "Wij proberen onze productie zo lokaal mogelijk te maken, dit is goed voor het milieu en bespaart logistieke kosten. Daar waar dat wel nodig is, zoals bij enkele LED chips of drivers, selecteren wij onze leveranciers mede op hun milieubeleid en maatregelen. Ons eigen transport proberen we zo veel mogelijk elektrisch te doen, recent hebben we gekozen voor een extra aanhanger i.p.v. een extra bus."
    },
    "Huisvesting": {
      "text": "Proliad heeft ge\xEFnvesteerd in een nieuw bedrijfspand dat voorzien is van zonnepanelen om de bedrijfsactiviteiten van stroom te voorzien, verder hebben we een warmtepomp ge\xEFnstalleerd om het geheel te verwarmen. Proliad zal groen blijven produceren en altijd zijn best doen om stap voor stap de wereld groener te maken.",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fhuisvesting.svg?alt=media",
      "title": "Huisvesting"
    }
  };
  let other = {
    "intro": "We stellen hoge eisen aan onze leveranciers en partners zodat u kunt profiteren van het beste op de markt. Wij maken gebruik van de hoogste kwaliteit aluminium, de beste Led-chips en de nieuwste drivers. We communiceren direct met lichtontwerpers en architecten, hieruit produceren en assembleren we onze producten zelf. Verder houden wij ons actief bezig met het tegenhouden van lichtvervuiling. We doen bijvoorbeeld mee aan projecten om \u2019s nachts minder openbare verlichting aan te hebben staan.",
    "logoURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Flogo.png?alt=media",
    "globeURL": "https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fwereldbol.svg?alt=media",
    "tagline": "Lokaal produceren en de beste kwaliteit garanderen. Proliad vindt het belangrijk om lokaal te produceren, te innoveren en te verbeteren.",
    "order": [
      "Kwaliteit",
      "Lokale productie",
      "Refurbished LED producten",
      "Verpakken",
      "Vervoeren",
      "Huisvesting"
    ]
  };
  $$result.css.add(css);
  return `<div id="${"wrapper"}" class="${"svelte-1dktguy"}">${validate_component(Navbar, "Navbar").$$render($$result, { logoURL: (other == null ? void 0 : other.logoURL) ?? "/logo.png" }, {}, {})}
		<img id="${"wereldbol"}"${add_attribute("src", other.globeURL, 0)} alt="${"wereldbol"}" class="${"svelte-1dktguy"}">
		${validate_component(Tagline, "Tagline").$$render($$result, { text: other.tagline }, {}, {})}
		${validate_component(Intro, "Intro").$$render($$result, { text: other.intro }, {}, {})}
		${validate_component(Content, "Content").$$render($$result, { contentItems, order: other.order }, {}, {})}
</div>`;
});
export {
  Page as default
};
