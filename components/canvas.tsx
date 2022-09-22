import React, { FC, useRef, useEffect } from 'react';
import { CARD_TYPE, VOICE_CHAT, PLAY_STYLE } from '../typings';

type Props = {
    cardType: CARD_TYPE;
    name: string;
    friendCode: string;
    favoriteWeapon: string;
    level: string;
    rankLevel: string;
    voiceChat: VOICE_CHAT;
    playStyle: Set<keyof typeof PLAY_STYLE>;
    memo: string;
};

const Canvas: FC<Props> = ({
    cardType,
    name,
    friendCode,
    favoriteWeapon,
    level,
    rankLevel,
    voiceChat,
    playStyle,
    memo,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) {
            return;
        }
        const img = new Image(1920, 1080);
        img.src = `/img/template/${cardType}.png`;
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
        };
    }, [cardType]);

    return <canvas ref={canvasRef} width='1920' height='1080' style={{ width: '100%' }} />;
};

export default Canvas;
