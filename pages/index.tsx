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
                <link rel='preconnect' href='https://cdn.jsdelivr.net'></link>
                <link
                    rel='preload'
                    href='https://cdn.jsdelivr.net/gh/max32002/TaiwanPearl@2.0/webfont/TaiwanPearl-Regular.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />
                <link
                    rel='preload'
                    href='https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />
                <link
                    rel='preload'
                    href='https://cdn.jsdelivr.net/gh/max32002/FakePearl@1.1/webfont/FakePearl-Regular.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />
                <link
                    rel='preload'
                    href='https://cdn.jsdelivr.net/gh/max32002/nanifont@1.0/webfont/NaniFont-Regular.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />
                <link
                    rel='preload'
                    href='https://cdn.jsdelivr.net/gh/max32002/JasonHandWritingFonts@1.1/webfont/JasonHandwriting2-SemiBold.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />
                <link rel='preload' href='/img/template/game-card.webp' as='image' />
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
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Splatoon 3 名片產生器' />
                <meta
                    name='twitter:description'
                    content='Nintendo Switch 遊戲《 斯普拉遁 3（Splatoon 3）》之 遊戲名片 & 打工仔員工證 線上產生器'
                />
                <meta name='twitter:image' content='https://splatoon-3.vercel.app/img/og-image.png' />
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
