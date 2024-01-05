import { FeatureSecurityPipe } from './feature-security.pipe';

describe('FeatureSecurityPipe', () => {
  it('create an instance', () => {
    const pipe = new FeatureSecurityPipe();
    expect(pipe).toBeTruthy();
  });
});
