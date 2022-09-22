import React, { FC, useRef, useEffect } from 'react';
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

const GameCard: FC<Props> = ({ name, friendCode, favoriteWeapon, level, rankLevel, voiceChat, playStyle, memo }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) {
            return;
        }
        const img = new Image(1920, 1080);
        img.src = `/img/template/game-card.png`;
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
        };
    }, []);

    useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) {
            return;
        }
    }, [name]);

    return <canvas ref={canvasRef} width='1920' height='1080' style={{ width: '100%' }} />;
};

export default GameCard;
