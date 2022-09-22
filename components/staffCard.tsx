import React, { FC, useRef, useEffect } from 'react';

type Props = {
    name: string;
    friendCode: string;
};

const StaffCard: FC<Props> = ({ name, friendCode }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) {
            return;
        }
        const img = new Image(1920, 1080);
        img.src = `/img/template/staff-card.png`;
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
        };
    }, []);

    return <canvas ref={canvasRef} width='1920' height='1080' style={{ width: '100%' }} />;
};

export default StaffCard;
