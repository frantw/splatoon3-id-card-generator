import { Box, Container, Stack, Text, useColorModeValue, Divider } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
            px={{ base: 2 }}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Divider />
            <Container
                as={Stack}
                w={'full'}
                maxW={'5xl'}
                px={0}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Text color={'gray.500'}>Splatoon 3 名片產生器 © 2022</Text>
                <Text color={'gray.500'} fontSize={{ base: '14px', sm: '16px' }}>
                    本網站所使用之名片模板由{' '}
                    <Link color={'#1DA1F2'} href='https://twitter.com/roo_kie_art'>
                        Roo (@roo_kie_art)
                    </Link>{' '}
                    提供
                </Text>
            </Container>
        </Box>
    );
};

export default Footer;
