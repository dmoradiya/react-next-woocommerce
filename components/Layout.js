import Head from 'next/head';
import { AppContext } from './context/AppContext';
import Header from './Header';


const Layout = ( props ) => {
    return (
        <AppContext>
            <div>
                <Head>
                    <title>React-Next-Woocommerce</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>                                  
                </Head>
            <Header/>                
            { props.children }
            </div>
        </AppContext>
        
    );
}
export default Layout;