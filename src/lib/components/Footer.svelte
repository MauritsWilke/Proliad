<script lang="ts">
	import type { DocumentData } from "firebase/firestore";


    export let footerData: DocumentData;
</script>


<div id="footer">
    <h1>{footerData.title}</h1>
    <div id="info">
        <div id="contact">
            <h2>{footerData.name}</h2>
            <p>{footerData.address}</p>
            <p>{footerData.email}</p>
            <p>{footerData.phone}</p>
        </div>
        <div id="socials">
            <img src={footerData.facebookIcon} alt="facebook" href={footerData.facebookLink} />
            <img src={footerData.twitterIcon} alt="twitter" href={footerData.twitterLink} />
            <img src={footerData.linkedInIcon} alt="linkedin" href={footerData.linkedInLink} />
            <p>{@html (footerData.newsletter ?? "").replace(footerData.newsletterLinkWord, `<a style="color: #fdf8ff; background-color: transparent;" href="${footerData.newsletterLink}">${footerData.newsletterLinkWord}</a>`)}</p>
            <p>{footerData.open}</p>
        
        </div>
    </div>
</div>

<style lang="scss">
    * {
        background-color: #f78f1e;
        color: #fdf8ff;
    }
    #footer {
        width: 100vw;
        margin-top: calc(-75px - 2.5vw);
        padding-top: calc(1vh + 1vw);

        h1 {
            text-align: center;
            font-size: calc(2vw + 2.5vh);
        }

        #info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-top: calc(1vw + 1vh);
            margin-left: 5vw;
            margin-right: 5vw;
            padding-bottom: calc(1.5vh + 1vw);

            #contact {
                margin-left: 2vw;
                margin-right: 2vw;

                h2 {
                    font-size: calc(1.5vw + 1.5vh);
                    line-height: calc(1.5vw + 1.5vh);
                }

                p {
                    font-size: calc(1vw + 0.6vh);
                    max-width: 35vw;
                }
            }

            #socials {
                margin-right: 2vw;
                margin-left: 2vw;

                p {
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