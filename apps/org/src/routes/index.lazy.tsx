import { createLazyFileRoute } from '@tanstack/react-router';

import NxWelcome from '../app/nx-welcome';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return <NxWelcome title="Org" />;
}
