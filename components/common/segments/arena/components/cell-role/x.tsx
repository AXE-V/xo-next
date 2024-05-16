'use client';
import React, { FC, useEffect, useRef } from 'react';
import { SVG } from '@svgdotjs/svg.js';
import { updateStrokeWidth } from '@/utils/svg';
import { Circle, PointArrayAlias } from '@svgdotjs/svg.js';

export const Cell_X = ({ stroke, attr, addClass }: Circle) => {
  return (
    <article data-roleContainer className="size-full grid place-items-center">
      <svg
        width={'85%'}
        height={'85%'}
        id="Слой_1"
        data-name="Слой 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 263.33 263.33">
        <g opacity="0.75">
          <g>
            <line
              x1="248.33"
              y1="15"
              x2="15"
              y2="248.33"
              fill="none"
              stroke="#eb5e28"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="30"
            />
            <line
              x1="15"
              y1="15"
              x2="248.33"
              y2="248.33"
              fill="none"
              stroke="#eb5e28"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="30"
            />
          </g>
        </g>
      </svg>
    </article>
  );
};
