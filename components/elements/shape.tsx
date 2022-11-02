import React, { FC } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

export type shapeType = {
    src?: string;
    x: number;
    y: number;
    scale?: number;
    rotation?: number;
    isShow: boolean;
};

const Shape: FC<shapeType> = ({ src = '', x, y, scale = 0.2, rotation = 0, isShow }) => {
    const [image] = useImage(src);
    return src ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
            image={image}
            scale={{ x: scale, y: scale }}
            rotation={rotation}
            x={x}
            y={y}
            opacity={isShow ? 1.0 : 0.0}
        />
    ) : null;
};

export default Shape;
