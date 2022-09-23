import React, { FC, useMemo, useRef, useEffect, MutableRefObject } from 'react';
import Konva from 'konva';
import { Stage, Layer, Text, Image } from 'react-konva';
import useImage from 'use-image';

type Props = {
    containerSize: { width: number; height: number };
    name: string;
    friendCode: string;
    exportRef: MutableRefObject<() => void | null>;
};

const sceneWidth = 1920;
const sceneHeight = 1080;

const downloadURI = (uri: string) => {
    const link = document.createElement('a');
    link.download = 'splatoon3-staff-card.png';
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const CardImage: FC = () => {
    const [image] = useImage('/img/template/staff-card.png');
    return <Image image={image} alt='splatoon3 staff card' />;
};

const StaffCard: FC<Props> = ({ containerSize, name, friendCode, exportRef }) => {
    const stageRef = useRef<Konva.Stage>(null);
    const scale = useMemo(() => containerSize.width / sceneWidth, [containerSize]);

    const handleExport = () => {
        if (!stageRef.current) return;
        const stage = stageRef.current;
        const prevSize = stage.size();
        const prevScale = stage.scale();
        stage.size({ width: sceneWidth, height: sceneHeight });
        stage.scale({ x: 1.0, y: 1.0 });
        const uri = stage.toDataURL();
        stage.size(prevSize);
        stage.scale(prevScale);
        downloadURI(uri);
    };

    useEffect(() => {
        exportRef.current = handleExport;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Stage ref={stageRef} width={containerSize.width} height={sceneHeight * scale} scale={{ x: scale, y: scale }}>
            <Layer>
                <CardImage />
            </Layer>
        </Stage>
    );
};

export default StaffCard;