import React, { FC } from 'react';
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, SimpleGrid, Button } from '@chakra-ui/react';
import { profileType } from '../hooks/useProfile';

const ProfileForm: FC<profileType> = ({
    nameSize,
    handleNameChange,
    updateNameSize,
    handleFriendCodeChange,
    name,
    friendCode,
}) => {
    return (
        <SimpleGrid columns={{ md: 2, sm: 2, base: 1 }} spacing={{ md: 10, sm: 10, base: 0 }}>
            {/* Name */}
            <FormControl mt={6}>
                <FormLabel>你的名字</FormLabel>
                <InputGroup>
                    <Input type='text' maxLength={10} pr='4.5rem' onChange={handleNameChange} value={name} />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={() => updateNameSize()}>
                            {nameSize}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            {/* Friend Code */}
            <FormControl mt={6}>
                <FormLabel>好友代碼</FormLabel>
                <Input
                    type='text'
                    maxLength={17}
                    placeholder='SW-1234-5678-9999'
                    onChange={handleFriendCodeChange}
                    value={friendCode}
                />
            </FormControl>
        </SimpleGrid>
    );
};

export default ProfileForm;
