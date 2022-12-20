import Head from "next/head";

export default function PageHeading() {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#6b2148" />
            <meta name="author" content="Yune Su Nadi" />
            <meta
                name="description"
                content="Portfolio of Yune Su Nadi, Frontend Developer."
            />
            <meta
                property="og:title"
                content="Yune Su Nadi | Frontend Developer"
            />
            <meta
                property="og:description"
                content="Portfolio of Yune Su Nadi, Frontend Developer."
            />
            <meta property="og:url" content="https://yunesunadi.com/" />
            <meta property="og:image" content="/meta-image.png" />
            <meta
                property="twitter:title"
                content="Yune Su Nadi | Frontend Developer"
            />
            <meta
                property="twitter:description"
                content="Portfolio of Yune Su Nadi, Frontend Developer."
            />
            <meta property="twitter:image" content="/meta-image.png" />
            <meta property="twitter:card" content="summary_large_image" />
            <link rel="canonical" href="https://yunesunadi.com/" />
            <link rel="icon" href="logo.svg" sizes="any" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="manifest" href="/manifest.json" />
            <title>Yune Su Nadi | Frontend Developer</title>
        </Head>
    );
}
