import "../styles/sass/main.scss";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <AnimatePresence mode="wait">
                <Layout key={router.asPath}>
                    <div className="container">
                        <Component {...pageProps} key={router.asPath} />
                    </div>
                </Layout>
            </AnimatePresence>
        </>
    );
}

export default MyApp;
