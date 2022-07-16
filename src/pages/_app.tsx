//import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../sass/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return <div className='main'>
        
        <Component {...pageProps} />
        </div>
}

export default MyApp
