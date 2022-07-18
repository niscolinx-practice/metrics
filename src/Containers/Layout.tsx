

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='main'>
            {children}
        </div>
    )
}

export default Layout
