import { Heading, Stack, Text } from '@chakra-ui/react';

const Header = () => {
    return (
        <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            px={{ sm: 2 }}
            pt={{ base: 20, md: 28 }}
            bg={'gray.50'}
        >
            <Heading
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}
                color={'#7D7DFA'}
            >
                Splatoon 3
                <Text as={'span'} position={'relative'} color={'black'}>
                    {' '}
                    名片產生器
                </Text>
            </Heading>
            <Text color={'gray.500'} maxW={'3xl'}>
                Nintendo Switch 遊戲《 斯普拉遁 3（Splatoon 3）》的遊戲名片線上產生器
            </Text>
        </Stack>
    );
};

export default Header;
