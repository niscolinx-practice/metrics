import Header from '../components/Header'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className='main'>{children}</div>
            <Footer />
        </>
    )
}

export default Layout
