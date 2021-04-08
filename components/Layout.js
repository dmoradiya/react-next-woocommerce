import Head from 'next/head';
import { AppProvider } from './context/AppContext';
import Header from './Header';


const Layout = ( props ) => {
    return (
        <AppProvider>
            <Head>
                <title>React-Next-Woocommerce</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>                                  
            </Head>
           <Header/>                
            { props.children }
        </AppProvider>
    );
}
export default Layout;