import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <title>Metrics</title>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
