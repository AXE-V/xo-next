'use client';
import React, { FC, useEffect, useRef } from 'react';
import { SVG } from '@svgdotjs/svg.js';
import { updateStrokeWidth } from '@/utils/svg';
import { Circle } from '@svgdotjs/svg.js';

export const Cell_O = ({ stroke, attr, addClass }: Circle) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const svgArea = SVG().addTo(containerRef.current!).attr({ width: '100%', height: '100%' });

    const circle = svgArea
      .circle('80%')
      .attr({ fill: 'none', cx: '50%', cy: '50%', ...attr })
      .stroke({ width: 20, ...stroke })
      .addClass(`stroke-primary ${addClass}`);

    window.addEventListener('resize', () =>
      updateStrokeWidth({ containerRef: containerRef, target: circle }),
    );
    updateStrokeWidth({ containerRef: containerRef, target: circle });

    return () => {
      svgArea.remove();
    };
  }, []);

  return <article data-roleContainer className="size-full" ref={containerRef} />;
};
