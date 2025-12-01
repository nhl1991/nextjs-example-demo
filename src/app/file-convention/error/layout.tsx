

export default function Layout({children } : {children : React.ReactNode}){


    return(
        <section id="error_page" className="w-screen h-screen flex items-center justify-center">
            {children}
        </section>
    )

}