import {
    Stack,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    useColorModeValue,
  } from '@chakra-ui/react';
import Canvas from './canvas';
import { CARD_TYPE } from '../typings/constants';
  
const Center = () => {
    return (
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        px={{ sm: 2 }}
        py={{ base: 10}}
        bg={'gray.50'}>
          <Stack
            spacing={4}
            w={'full'}
            maxW={'5xl'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}>
            <Tabs variant='soft-rounded' colorScheme='yellow'>
              <TabList>
                <Tab>遊戲名片</Tab>
                <Tab>打工員工證</Tab>
              </TabList>
              <TabPanels>
                <TabPanel px={0}>
                  <Canvas cardType={CARD_TYPE.GAME_CARD}></Canvas>
                </TabPanel>
                <TabPanel px={0}>
                  <Canvas cardType={CARD_TYPE.STAFF_CARD}></Canvas>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
      </Stack>
    )
};

export default Center;
