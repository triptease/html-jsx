import { expect } from 'vitest';

function normalize(input: string): string {
  return input
    .replace(/\r\n?/g, '\n')
    .replace(/\n[ \t]*/g, '')
    .trim();
}

expect.extend({
  toEqualIgnoringFormatting(received: string, expected: string) {
    const receivedNorm = normalize(received);
    const expectedNorm = normalize(expected);

    const pass = receivedNorm === expectedNorm;

    return {
      pass,
      message: () =>
        pass
          ? `Expected strings not to be equal ignoring formatting\nReceived: ${receivedNorm}`
          : [
              'Expected strings to be equal ignoring formatting',
              `Received (normalized): ${receivedNorm}`,
              `Expected (normalized): ${expectedNorm}`,
            ].join('\n'),
      actual: receivedNorm,
      expected: expectedNorm,
    } as any;
  },
});

declare module 'vitest' {
  interface Assertion<T = any> {
    toEqualIgnoringFormatting(expected: any): void;
  }
  interface AsymmetricMatchersContaining {
    toEqualIgnoringFormatting(expected: any): void;
  }
}
