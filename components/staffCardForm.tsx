import React, { FC, useState, useRef, ChangeEvent, MutableRefObject } from 'react';
import { Box, FormControl, FormLabel, Input, SimpleGrid, Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';

const StaffCard = dynamic(() => import('./staffCard'), { ssr: false });

const StaffCardForm: FC = () => {
    const [name, setName] = useState('さくら');
    const handleNameChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setName(value);
    };

    const [friendCode, setFriendCode] = useState('SW-1234-5678-9999');
    const handleFriendCodeChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setFriendCode(value);
    };

    const exportRef = useRef(null) as unknown as MutableRefObject<() => void | null>;

    return (
        <Box>
            <StaffCard name={name} friendCode={friendCode} exportRef={exportRef}></StaffCard>

            <SimpleGrid columns={2} spacing={10}>
                {/* Name */}
                <FormControl mt={6}>
                    <FormLabel>你的名字</FormLabel>
                    <Input type='text' maxLength={10} onChange={handleNameChange} />
                </FormControl>
                {/* Friend Code */}
                <FormControl mt={6}>
                    <FormLabel>好友代碼</FormLabel>
                    <Input
                        type='text'
                        maxLength={17}
                        placeholder='SW-1234-5678-9999'
                        onChange={handleFriendCodeChange}
                    />
                </FormControl>
            </SimpleGrid>

            {/* TODO: staff card form */}

            {/* Download */}
            <Button colorScheme='purple' mt={30} leftIcon={<DownloadIcon />} onClick={() => exportRef.current()}>
                下載名片
            </Button>
        </Box>
    );
};

export default StaffCardForm;
