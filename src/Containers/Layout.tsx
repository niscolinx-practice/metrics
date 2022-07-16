import Header from '../components/Header'
import Footer from '../components/Footer'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='main'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
