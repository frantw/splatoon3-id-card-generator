import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
    Divider,
  } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
          px={{ base: 2 }}
          bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')}>
          <Divider/>
          <Container
            as={Stack}
            maxW={'5xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2022 Chakra Templates. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}></Stack>
          </Container>
        </Box>
      );
};

export default Footer;