
<div id="footer">
    <h1>Contact</h1>
    <div id="info">
        <div id="contact">
            <h2>PROLIAD LED LIGHTING</h2>
            <p>Vrijkenstraat 18, 6088 PA, Roggel</p>
            <p>info@proliad.com</p>
            <p>+31 (0)4 75 44 44 20</p>
        </div>
        <div id="socials">
            <img src="https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fproliad-facebook.png?alt=media" alt="facebook" />
            <img src="https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fproliad-twitter.png?alt=media" alt="facebook" />
            <img src="https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/o/assets%2Fproliad-linkedin.png?alt=media" alt="facebook" />
            <p>Schrijf je <a href="https://www.proliad.com/nieuws">hier</a> in voor onze nieuwsbrief.</p>
            <p>Open van maandag tot en met vrijdag tussen 09.00 en 17.00 uur. Bezoek geschiedt alléén op afspraak.</p>
        
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
            padding-bottom: calc(1.5vh + 1vw);

            #contact {
                margin-left: 2vw;
                h2 {
                    font-size: calc(1.5vw + 1.5vh);
                    line-height: calc(1vw + 2vh);
                }

                p {
                    font-size: calc(1vw + 0.6vh);
                    line-height: calc(1.25vw + 1.2vh);
                    max-width: 35vw;
                }
            }

            #socials {
                margin-right: 2vw;
                margin-top: calc((-1.5vw - 1.5vh) / 2);

                p {
                    font-size: calc(1vw + 0.6vh);
                    max-width: calc(49vw - 2.5vh);
                }

                img {
                    width: calc(1.5vw + 1.5vh);
                    height: auto;
                    margin-top: 1vh;
                    margin-right: calc((1.5vw + 2vh) * 0.5);
                    margin-bottom: 1vh;
                }
            }
        }
    }
</style>