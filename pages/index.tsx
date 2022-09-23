import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import Header from '../components/header';
import Center from '../components/center';
import Footer from '../components/footer';
import Head from 'next/head';
import { Fragment } from 'react';

const Home: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Splatoon 3 名片產生器</title>
                <meta
                    name='description'
                    content='Nintendo Switch 遊戲《 斯普拉遁 3（Splatoon 3）》之 遊戲名片 & 打工仔員工證 線上產生器'
                />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='keywords' content='Splatoon 3, 斯普拉遁3, 遊戲名片, 產生器, Nintendo Switch, NS' />
                <link
                    rel='preload'
                    href='https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin=''
                />
                <link
                    rel='preload'
                    href='https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff'
                    as='font'
                    type='font/woff'
                    crossOrigin=''
                />
                <link
                    rel='preload'
                    href='https://cdn.jsdelivr.net/gh/max32002/FakePearl@1.1/webfont/FakePearl-Regular.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin=''
                />
                <link
                    rel='preload'
                    href='https://cdn.jsdelivr.net/gh/max32002/FakePearl@1.1/webfont/FakePearl-Regular.woff'
                    as='font'
                    type='font/woff'
                    crossOrigin=''
                />
                <link rel='icon' href='/favicon.ico' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='Splatoon 3 名片產生器' />
                <meta
                    property='og:description'
                    content='Nintendo Switch 遊戲《 斯普拉遁 3（Splatoon 3）》之 遊戲名片 & 打工仔員工證 線上產生器'
                />
                <meta property='og:image' content='/img/og-image.png' />
                <meta property='og:url' content='https://splatoon-3.vercel.app' />
                <meta property='og:site_name' content='Splatoon 3 名片產生器' />
            </Head>
            <Container maxW={'full'} p={0}>
                <Header />
                <Center />
                <Footer />
            </Container>
        </Fragment>
    );
};

export default Home;
