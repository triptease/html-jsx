import { describe, expect, test, beforeEach, afterEach } from 'vitest';

describe('child content categories', () => {
  let consoleOutput: string[] = [];
  const originalConsoleLog = console.warn;

  beforeEach(() => {
    consoleOutput = [];
    console.warn = (...args) => consoleOutput.push(args.join(' '));
  });

  afterEach(() => {
    console.warn = originalConsoleLog;
  });

  test('an element with content category of none cannot be placed inside another element', () => {
    expect(() => (
      <div>
        <html></html>
      </div>
    )).not.toThrow();
    expectWarning('html is not a valid child of div');
  });

  test('an element that does not accept children of content category phrasing can not contain text', () => {
    expect(() => <ul>Some text</ul>).not.toThrow();
    expectWarning('text is not a valid child of ul');
  });

  test('an element that only accepts phrasing elements can not contain a flow element', () => {
    expect(() => (
      <span>
        <div></div>
      </span>
    )).not.toThrow();
    expectWarning('div is not a valid child of span');
  });

  test('an element that only accepts phrasing can contain text elements', () => {
    expect(() => <span>Some text</span>).not.toThrow();
    expect(consoleOutput).toHaveLength(0);
  });

  test('an element that only accepts flow can contain text elements', () => {
    expect(() => <div>Some text</div>).not.toThrow();
    expect(consoleOutput).toHaveLength(0);
  });

  test('an element that only accepts phrasing can contain phrasing elements', () => {
    expect(() => (
      <span>
        <b>Some text</b>
      </span>
    )).not.toThrow();
    expect(consoleOutput).toHaveLength(0);
  });

  test('an element that accepts a transparent child can contain anything', () => {
    expect(() => (
      <a>
        <html></html>
      </a>
    )).not.toThrow();
    expect(consoleOutput).toHaveLength(0);
  });

  test('a child element can be specified by tag name and not content category', () => {
    expect(() => (
      <dl>
        <dt>Term</dt>
      </dl>
    )).not.toThrow();
    expect(consoleOutput).toHaveLength(0);
  });

  function expectWarning(message: string) {
    expect(consoleOutput).toHaveLength(1);
    expect(consoleOutput[0]).toMatch(new RegExp(`^${message}`));
  }
});
