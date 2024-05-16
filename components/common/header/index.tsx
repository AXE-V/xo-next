import { Metadata } from 'next';
import { NextUILogo } from '../../icons';
import { ThemeSelect } from '../theme-select';
import UserMessages from './components/messages';
import UserAvatar from './components/user-avatar';
import { createClient } from '@/utils/supabase/server';
import { ReactElement } from 'react';
import { User } from '@supabase/supabase-js';

type Props = {
  user?: User | null;
  metadata?: Metadata;
};

export const Header = ({ metadata, user }: Props) => {
  return (
    <div className="flex justify-between items-center py-5 px-5 bg-background">
      <NextUILogo height={37} />
      <div className="flex gap-8">
        <div className="flex gap-4 items-center">
          <ThemeSelect />
          <UserMessages />
          <UserAvatar user={user as unknown as User} />
        </div>
      </div>
    </div>
  );
};
