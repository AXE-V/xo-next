//@ts-nocheck
'use client';
import { SvgProps } from '@/types';
import { CardBody, Card as NextCard } from '@nextui-org/react';
import clsx from 'clsx';
import React, { FC, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Arena, Cell } from './logic';
import { Cell_X } from './components/cell-role/x';
import { Cell_O } from './components/cell-role/o';

export const SegmentCells = () => {
  const [cells, setCells] = useState<Arena>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [turn, setTurn] = useState<Cell>('X');
  const selectedCellRef = useRef<HTMLDivElement | null>(null);

  const onClickCell = (e: SyntheticEvent<EventTarget>) => {
    if ((e.target as HTMLElement).dataset.cell) {
      selectedCellRef.current = e.target as HTMLDivElement;
      const cellCoordinates = (e.target as HTMLElement).dataset.cell!.split('-').map(Number);
      const cellCopy = [...cells];
      cellCopy[cellCoordinates[0]][cellCoordinates?.[1]] = turn;
      setCells(cellCopy as Arena);
      setTurn(turn === 'X' ? 'O' : 'X');
      // console.log(cellCoordinates);
      // console.log(selectedCellRef.current);
    }
  };

  return (
    <div
      onClick={onClickCell}
      className={clsx(`cells-container`, `grid gap-2`, `grid-cols-[repeat(3,minmax(30px,1fr))]`)}>
      {cells.map((row, irow) =>
        row.map((col, icol) => (
          <>
            <div
              aria-labelledby={`cell-${irow}-${icol}`}
              key={`cell-${irow}-${icol}`}
              data-cell={`${irow}-${icol}`}
              className="shadow-none bg-background-100 rounded-2xl aspect-square border-transparent border-2 transition hover:transition hover:border-secondary/75 overflow-clip">
              {cells[irow][icol] === 'X' ? (
                <Cell_O />
              ) : cells[irow][icol] === 'O' ? (
                <Cell_X />
              ) : null}
            </div>
          </>
        )),
      )}
    </div>
  );
};
