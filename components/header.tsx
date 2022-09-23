import { Heading, Stack, Text } from '@chakra-ui/react';
import { CARD_NAME } from '../typings';

const Header = () => {
    return (
        <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            px={{ sm: 2 }}
            pt={{ base: 20 }}
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
            <Text color={'gray.500'} maxW={'4xl'} fontSize={{ base: '14px', sm: '16px' }}>
                Nintendo Switch《 斯普拉遁 3（Splatoon 3）》之{' '}
                <Text as={'span'} position={'relative'} color={'#7D7DFA'}>
                    {CARD_NAME.GAME_CARD}
                </Text>{' '}
                &{' '}
                <Text as={'span'} position={'relative'} color={'#d56511'}>
                    {CARD_NAME.STAFF_CARD}
                </Text>{' '}
                線上產生器（建議以電腦開啟）
            </Text>
        </Stack>
    );
};

export default Header;
