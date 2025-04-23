"use client";

// Import only the Keyboard component directly from stitch-extension
import { Keyboard } from "@bonterratech/stitch-extension";
import { coreTokens as $ } from '@bonterratech/stitch-tokens/coreTokens.stylex';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: $['--s-color-peri-100'],
  },
});

export default function KeyboardTest() {
  return (
    <main {...stylex.props(styles.container)}>
      <h1>Single Component Test</h1>
      <Keyboard>Test Keyboard Component</Keyboard>
    </main>
  );
}