import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        const GTM_ID = 'GTM-W7K4HGQ';
        return (
            <Html>
                <Head>
                    <title>My Portfolio</title>
                    <meta name="description" content="Desarrollador de sitios web y landing page. Con capacidades de resolución de conflictos y de aprender nuevas tecnologías para estar siempre a la vanguardia." />

                    {/* FACEBOOK */}
                    <meta property="og:title" content="MyPortfolio Tjhonnar" />
                    <meta property="og:description" content="Desarrollador de sitios web y landing page. Con capacidades de resolución de conflictos y de aprender nuevas tecnologías para estar siempre a la vanguardia." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://tjhonnar.ga" />
                    <meta property="og:image" content="https://tjhonnar.ga/image0.jpg" />

                    {/* TWITTER */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content="MyPortfolio Tjhonnar"/>
                    <meta name="twitter:description" content="Desarrollador de sitios web y landing page. Con capacidades de resolución de conflictos y de aprender nuevas tecnologías para estar siempre a la vanguardia."/>
                    <meta name="twitter:site" content="@Roderix78"/>
                    <meta name="twitter:image" content="https://tjhonnar.ga/image0.jpg"/>
                    <meta name="twitter:creator" content="@Roderix78"/>

                    {/* APPLE */}
                    <meta name="apple-mobile-web-app-title" content="MyPortfolio Tjhonnar" />

                    <link rel="icon" href="/favicon.ico"/>

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${GTM_ID}');`,
                        }}
                    />
                    
                </Head>
                <body>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                />
                <Main/>
                <NextScript/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;