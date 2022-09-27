import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

const Fonts = () => (
    <Global
        styles={`
        @font-face {
            font-family: taiwanpearl;
            font-display: swap;
            src:
                url(https://cdn.jsdelivr.net/gh/max32002/TaiwanPearl@2.0/webfont/TaiwanPearl-Regular.woff2) format("woff2"),
                url(https://cdn.jsdelivr.net/gh/max32002/TaiwanPearl@2.0/webfont/TaiwanPearl-Regular.woff) format("woff");
        }
        @font-face {
            font-family: naikaifont;
            font-display: swap;
            src:
                url(https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff2) format("woff2"),
                url(https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff) format("woff");
        }
        @font-face {
            font-family: fakepearl;
            font-display: swap;
            src:
                url(https://cdn.jsdelivr.net/gh/max32002/FakePearl@1.1/webfont/FakePearl-Regular.woff2) format("woff2"),
                url(https://cdn.jsdelivr.net/gh/max32002/FakePearl@1.1/webfont/FakePearl-Regular.woff) format("woff");
        }
        @font-face {
            font-family: nanifont;
            font-display: swap;
            src:
                url(https://cdn.jsdelivr.net/gh/max32002/nanifont@1.0/webfont/NaniFont-Regular.woff2) format("woff2"),
                url(https://cdn.jsdelivr.net/gh/max32002/nanifont@1.0/webfont/NaniFont-Regular.woff) format("woff");
        }
        @font-face {
            font-family: "jasonhandwriting";
            font-display: swap;
            src:
                url(https://cdn.jsdelivr.net/gh/max32002/JasonHandWritingFonts@1.1/webfont/JasonHandwriting2-SemiBold.woff2) format("woff2"),
                url(https://cdn.jsdelivr.net/gh/max32002/JasonHandWritingFonts@1.1/webfont/JasonHandwriting2-SemiBold.woff) format("woff");
        }
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
