'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export async function emailLogin(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    redirect('/login?error=Could not authenticate user');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        nickname: formData.get('nickname') as string,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);
    redirect('/login?error=Error signing up');
  }

  revalidatePath('/', 'layout');
  // после отправки письма на подтверждение регистрации остаться указанном на url
  redirect('/login?success=Check your Email');
}

export async function signOut() {
  const supabse = createClient();
  await supabse.auth.signOut();
  redirect('/login');
}
