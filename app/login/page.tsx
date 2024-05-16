import { emailLogin, signup } from './actions';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';
import { createClient } from '@/utils/supabase/server';
import { Button, Card, CardBody, Input, useUser } from '@nextui-org/react';
import { DiscordIcon, GithubIcon, Smile, TwitterIcon } from '@/components/icons';
import { title } from '@/components/primitives';
import clsx from 'clsx';
import { redirect } from 'next/navigation';

const providers = [
  { name: 'Discord', icon: DiscordIcon },
  { name: 'Twitter', icon: TwitterIcon },
  { name: 'Github', icon: GithubIcon },
];

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { error: string; success: string };
}) {
  // const supabase = createClient();
  // const { data, error } = await supabase.auth.getUser();
  // if (data) {
  //   console.log(data);
  //   return redirect('/');
  // }
  return (
    <>
      <form id="login-form" className="size-full">
        <Card classNames={{ base: 'shadow-none size-full' }}>
          <CardBody>
            <p
              className={`${title({
                size: 'sm',
              })} pt-5 pb-10 text-center leading-10 text-foreground`}>
              Login via OTP or email & password
            </p>
            <div className="flex gap-2 w-full relative mb-4">
              {providers.map((provider) => (
                <Card key={provider.name} className="w-full max-h-full shadow-none">
                  <CardBody
                    className={clsx(
                      'flex flex-col p-2 place-items-center bg-background-50 rounded-xl transition',
                      'hover:bg-default',
                    )}>
                    <provider.icon />
                    <div className="pt-2">{provider.name}</div>
                  </CardBody>
                </Card>
              ))}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <Input
                id="email"
                label="email"
                name="email"
                type="email"
                variant="flat"
                color="primary"
              />
              <Input
                id="nickname"
                label="nickname"
                name="nickname"
                type="text"
                variant="flat"
                color="primary"
              />
              <Input
                id="password"
                label="password"
                name="password"
                type="password"
                variant="flat"
                color="primary"
              />
              {searchParams.error && <div className="text-danger">{searchParams.error}</div>}
              {searchParams.success && <div className="text-success">{searchParams.success}</div>}
            </div>
            <div className="grid gap-2 grid-cols-[repeat(2,1fr)]">
              <Button variant="flat" color="secondary" type="submit" formAction={emailLogin}>
                Log in
              </Button>
              <Button variant="flat" color="secondary" type="submit" formAction={signup}>
                Log up
              </Button>
            </div>
          </CardBody>
        </Card>
      </form>
    </>
  );
}
