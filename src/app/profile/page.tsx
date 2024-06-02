import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { getServerAuthSession } from '~/server/auth';

export default async function Profile() {
  const session = await getServerAuthSession();
  // console.log('session', session);

  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <p>Some profile page</p>
    </div>
  );
}
