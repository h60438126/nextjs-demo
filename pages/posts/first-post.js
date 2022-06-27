import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
     <Layout>
         <Head>
             <title>First Post</title>
         </Head>
         {/*<Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={() => console.log('onload!')} />*/}
         <h1>first post</h1>
         <Link href='/'>
             <a>Back to home</a>
         </Link>
         <Image src="/images/profile.jpg" width={144} height={144} alt="图片"/>
     </Layout>
    );
}