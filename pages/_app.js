import Layout from "./layout"
import Footer from "./footer"
import "../styles/layout.module.css"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
        <>
        <Layout>
         <Component {...pageProps} /> 
        </Layout>
        <Footer { ... pageProps}/>
        </>
    )
}