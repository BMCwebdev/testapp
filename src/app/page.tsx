"use client";

// Simple Repo. Comment Icon back to to cause error.
import { Keyboard as SimpleKeyboard } from '@simplerepo/simplerepo';
// import { Icon as SimpleIcon } from '@simplerepo/simplerepo';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: 'purple',
  },
  row: {
    marginBottom: '20px',
    padding: '15px',
    border: `1px solid red`,
    borderRadius: '8px',
  },
  iconWrapper: {
    marginTop: '10px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
});

export default function Home() {
  return (
    <main {...stylex.props(styles.container)}>
      <h1>Button Test Build</h1>
      <SimpleKeyboard>
        <div>Hello</div>
      </SimpleKeyboard>
      {/* <SimpleIcon name="house" size="small" color="default" /> */}
    </main>
  );
}
