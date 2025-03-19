import { render } from '@testing-library/react';

import AboutFeature from './feature-about.lazy';

describe('FeatureAbout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutFeature children={undefined} />);
    expect(baseElement).toBeTruthy();
  });
});
