import { AboutFeature } from '@features/about';
import { createLazyFileRoute } from '@tanstack/react-router';

export const route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  return <AboutFeature>Hello from About!</AboutFeature>;
}
