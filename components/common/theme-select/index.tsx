'use client';
import { SelectComponentProps, SvgProps } from '@/types';
import { Code, Select as NextSelect, SelectItem, SelectProps } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { Snippet } from 'next/font/google';
import { useEffect, useState } from 'react';

export const ThemeSelect = ({ style }: SvgProps) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  const THEMES = [
    { key: 'dark', label: 'Magma' },
    { key: 'light', label: 'Ocean' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NextSelect
      style={style}
      classNames={{
        trigger: 'data-[hover=true]:bg-background-300 transition',
      }}
      className={`w-36`}
      aria-label="theme-select"
      color="default"
      variant="flat"
      size="md"
      selectionMode="single"
      defaultSelectedKeys={[THEMES[0].key]}>
      {THEMES.map((t) => (
        <SelectItem onClick={() => setTheme(t.key)} key={t.key}>
          {t.label}
        </SelectItem>
      ))}
    </NextSelect>
  );
};
