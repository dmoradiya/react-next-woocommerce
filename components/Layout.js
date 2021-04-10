import Head from 'next/head';
import { AppProvider } from './context/AppContext';
import Header from './Header';


const Layout = ( props ) => {
    return (
        <AppProvider>
            <Head>
                <title>React-Next-Woocommerce</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>                                  
            </Head>
           <Header/>                
            { props.children }
        </AppProvider>
    );
}
export default Layout;