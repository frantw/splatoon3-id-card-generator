import { Stack, Tab, Tabs, TabList, TabPanel, TabPanels, useColorModeValue } from '@chakra-ui/react';
import GameCardForm from './elements/form/gameCardForm';
import StaffCardForm from './elements/form/staffCardForm';
import useElementSize from '../hooks/useElementSize';
import useCommonForm from '../hooks/useCommonForm';
import { CARD_NAME } from '../typings';

const Center = () => {
    const { elementRef: containerRef, elementSize: containerSize } = useElementSize();
    const props = useCommonForm();
    return (
        <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            px={{ sm: 2 }}
            py={{ base: 10 }}
            bg={'gray.50'}
        >
            <Stack
                spacing={4}
                w={'full'}
                maxW={'5xl'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}
            >
                <Tabs variant='soft-rounded' colorScheme='yellow'>
                    <TabList>
                        <Tab>{CARD_NAME.GAME_CARD}</Tab>
                        <Tab>{CARD_NAME.STAFF_CARD}</Tab>
                    </TabList>
                    <TabPanels ref={containerRef}>
                        <TabPanel px={0}>
                            <GameCardForm containerSize={containerSize} {...props} />
                        </TabPanel>
                        <TabPanel px={0}>
                            <StaffCardForm containerSize={containerSize} {...props} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Stack>
        </Stack>
    );
};

export default Center;
