import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

const Fonts = () => (
    <Global
        styles={`
        @font-face {
            font-family: naikaifont;
            src:
                url(https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff2) format("woff2"),
                url(https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff) format("woff");
          }
        @font-face {
            font-family: fakepearl;
            src:
                url(https://cdn.jsdelivr.net/gh/max32002/FakePearl@1.1/webfont/FakePearl-Regular.woff2) format("woff2"),
                url(https://cdn.jsdelivr.net/gh/max32002/FakePearl@1.1/webfont/FakePearl-Regular.woff) format("woff");
        `}
    />
);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Fonts />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
