import React, { FC, Fragment } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    SimpleGrid,
    Button,
    RadioGroup,
    Radio,
    HStack,
} from '@chakra-ui/react';
import { profileType } from '../hooks/useProfile';
import { FONT_FAMILY, FONT_FAMILY_NAME } from '../typings';

const ProfileForm: FC<profileType> = ({
    nameSize,
    handleNameChange,
    updateNameSize,
    handleFriendCodeChange,
    name,
    friendCode,
    handleFontFamilyChange,
}) => {
    return (
        <Fragment>
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

            {/* Voice Chat */}
            <FormControl mt={6} as='fieldset'>
                <FormLabel as='legend'>文字字體</FormLabel>
                <RadioGroup defaultValue={'FAKEPEARL'}>
                    <HStack spacing='0' wrap={'wrap'}>
                        {(Object.keys(FONT_FAMILY_NAME) as (keyof typeof FONT_FAMILY)[]).map((fontFamily) => (
                            <Radio
                                key={fontFamily}
                                value={fontFamily}
                                onChange={handleFontFamilyChange}
                                px={'12px'}
                                py={{ md: '0', sm: '0', base: '8px' }}
                            >
                                {FONT_FAMILY_NAME[fontFamily]}
                            </Radio>
                        ))}
                    </HStack>
                </RadioGroup>
            </FormControl>
        </Fragment>
    );
};

export default ProfileForm;
