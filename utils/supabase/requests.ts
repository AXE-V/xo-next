import { Database } from '@/types/supabase';
import { createClient } from './client';
import { PostgrestError } from '@supabase/supabase-js';

const supabase = createClient();

export type DataChecker<T> = ({ data, error }: { data: T; error: PostgrestError | null }) => T;

export function dataChecker<T>({
  data,
  error,
}: {
  data: T;
  error: PostgrestError | null;
}): T | null {
  if (error || !data) {
    console.log(error);
    return null;
  }
  return data;
}

// export const dataChecker: DataChecker<any> = ({ data, error }) => {
//   if (error || !data) {
//     console.log(error);
//     return undefined;
//   }
//   return data;
// };

export const userRequsts = {
  getNickname: async () => {
    let { data, error } = await supabase.from('profiles').select('nickname');
    return dataChecker({ data, error });
  },
};
