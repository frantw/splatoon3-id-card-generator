import React, { FC, useRef, MutableRefObject } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
import ProfileForm from './profileForm';
import { profileType } from '../hooks/useProfile';

const StaffCard = dynamic(() => import('./staffCard'), { ssr: false });

type Props = {
    containerSize: { width: number; height: number };
} & profileType;

const StaffCardForm: FC<Props> = ({
    containerSize,
    name,
    nameSize,
    friendCode,
    handleNameChange,
    updateNameSize,
    handleFriendCodeChange,
}) => {
    const exportRef = useRef(null) as unknown as MutableRefObject<() => void | null>;

    return (
        <Box>
            {/* Card Preview */}
            <StaffCard
                containerSize={containerSize}
                name={name}
                nameSize={nameSize}
                friendCode={friendCode}
                exportRef={exportRef}
            ></StaffCard>

            {/* Name &  FriendCode*/}
            <ProfileForm
                name={name}
                friendCode={friendCode}
                nameSize={nameSize}
                handleNameChange={handleNameChange}
                updateNameSize={updateNameSize}
                handleFriendCodeChange={handleFriendCodeChange}
            />

            {/* TODO: staff card form */}

            {/* Download */}
            <Button colorScheme='purple' mt={30} leftIcon={<DownloadIcon />} onClick={() => exportRef.current()}>
                下載名片
            </Button>
        </Box>
    );
};

export default StaffCardForm;
