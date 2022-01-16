import Document, { Head, Html, Main, NextScript } from 'next/document';

 class MyDocument extends Document {
  render() {
     return(
       <Html>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600&family=Poppins&family=Roboto:wght@700;900&display=swap" rel="stylesheet"/>
            
            <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
       </Html>
     )
  }
}
export default MyDocument;