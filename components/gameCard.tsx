import React, { FC, useState, useRef, useLayoutEffect, useMemo } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import { Box } from '@chakra-ui/react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { VOICE_CHAT, PLAY_STYLE } from '../typings';

type Props = {
    name: string;
    friendCode: string;
    favoriteWeapon: string;
    level: string;
    rankLevel: string;
    voiceChat: VOICE_CHAT;
    playStyle: Set<keyof typeof PLAY_STYLE>;
    memo: string;
};

const sceneWidth = 1920;
const sceneHeight = 1080;

const CardImage: FC = () => {
    const [image] = useImage('/img/template/game-card.png');
    return <Image image={image} alt='splatoon3 game card' />;
};

const GameCard: FC<Props> = ({ name, friendCode, favoriteWeapon, level, rankLevel, voiceChat, playStyle, memo }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    useLayoutEffect(() => {
        setContainerWidth(containerRef.current?.offsetWidth || 0);
        setContainerHeight(containerRef?.current?.offsetHeight || 0);
    }, []);

    // TODO: window resize
    const scale = useMemo(() => containerWidth / sceneWidth, [containerWidth]);

    return (
        <Box ref={containerRef}>
            <Stage width={containerWidth} height={sceneHeight * scale} scale={{ x: scale, y: scale }}>
                <Layer>
                    <CardImage />
                    <Text x={340} y={150} text={name} fontSize={40} fill={'black'} />
                </Layer>
            </Stage>
        </Box>
    );
};

export default GameCard;
