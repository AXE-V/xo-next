'use client';
import {
  Svg as DotSvg,
  Circle,
  Ellipse,
  Line,
  Polyline,
  Polygon,
  ElementTypeAlias,
  ElementAlias,
  SVGTypeMapping,
  Rect,
} from '@svgdotjs/svg.js';
import { MutableRefObject } from 'react';

export const updateStrokeWidth = ({
  containerRef,
  target,
}: {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  target: Circle | Ellipse | Rect | Polyline | Polygon | Line;
}) => {
  const container = containerRef.current as unknown as HTMLElement;
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const maxSize = Math.max(containerWidth, containerHeight);
  const strokeWidth = maxSize / 10;
  target.stroke({ width: strokeWidth });
};
