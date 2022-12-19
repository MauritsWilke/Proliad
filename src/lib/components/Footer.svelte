<script lang="ts">
	import type { DocumentData } from "firebase/firestore";
	import { onMount } from "svelte";

    onMount(() => {
        document.getElementById('footer').addEventListener('keypress', (evt) => {
            if (evt.which === 13) {
                evt.preventDefault();
            }
        });
    })


    export let footerData: DocumentData;
</script>


<div id="footer">
    <h1 id="contactTitle" class="editable">{footerData.title}</h1>
    <div id="info">
        <address id="contact">
            <h2 class="editable" id="name">{@html footerData.name}</h2>
            <a href="https://goo.gl/maps/98iUP4bTPUJzRi8X8" class="editable" id="address">{@html footerData.address}</a>
            <br>
            <a href={`mailto:${footerData.email}`} class="editable" id="email">{@html footerData.email}</a>
            <br>
            <a href={`tel:${footerData.phone}`} class="editable" id="phone">{@html footerData.phone}</a>
        </address>
        <div id="socials">
            <a href={footerData.facebookLink}><img src={footerData.facebookIcon} alt="facebook" /></a>
            <a href={footerData.twitterLink}><img src={footerData.twitterIcon} alt="twitter" /></a>
            <a href={footerData.linkedInLink}><img src={footerData.linkedInIcon} alt="linkedin" /></a>
            <p class="editable">{@html (footerData.newsletter ?? "").replace(footerData.newsletterLinkWord, `<a style="color: #fdf8ff; background-color: transparent; cursor: pointer;" href="${footerData.newsletterLink}">${footerData.newsletterLinkWord}</a>`)}</p>
            <p class="editable" id="open">{@html footerData.open}</p>
        </div>
    </div>
</div>

<style lang="scss">
    * {
        color: #fdf8ff;
        background-color: #f78f1e !important;
    }
    
    #footer {
        background-color: #f78f1e !important;
        width: 100vw;
        margin-top: calc(-75px - 2.5vw);
        padding-top: calc(7vh - 7vw);

        h1 {
            text-align: center;
            font-size: calc(2vw + 2.5vh)
        }

        #info {
            text-underline-position: under;
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-top: calc(1vw + 1vh);
            margin-left: 5vw;
            margin-right: 5vw;
            padding-bottom: calc(1.5vh + 1vw);

            #contact {
                font-style: normal;
                margin-left: 2vw;
                margin-right: 2vw;

                h2 {
                    font-size: calc(1.5vw + 1.5vh);
                    line-height: calc(1.5vw + 1.5vh);
                }

                p, a {
                    font-size: calc(1vw + 0.6vh);
                    max-width: 35vw;
                }
            }

            #socials {
                margin-right: 2vw;
                margin-left: 2vw;

                p, a {
                    font-size: calc(1vw + 0.6vh);
                    max-width: calc(49vw - 2.5vh);
                }

                img {
                    height: calc(1.5vw + 1.5vh);
                    margin-right: calc((1.5vw + 2vh) * 0.5);
                    cursor: pointer;
                }
            }
        }
    }
</style>