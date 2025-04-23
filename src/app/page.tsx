"use client";

// Testing button-test build: Simple components plus Button without Icon dependency
// Using the super simple icon implementation and modified Button
// import { 
//   Keyboard as StitchKeyboard,
//   Card,
//   Icon,
//   Text,
//   Heading,
//   Button
// } from "@bonterratech/stitch-extension";
import { Keyboard as SimpleKeyboard, Icon as SimpleIcon } from '@simplerepo/simplerepo';
// import { coreTokens as $ } from '@bonterratech/stitch-tokens/coreTokens.stylex';
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
      <SimpleIcon name="house" size="small" color="default" />
      <SimpleKeyboard outline>
        <div>Hello</div>
      </SimpleKeyboard>
      {/* <div {...stylex.props(styles.row)}>
        <h2>Icons and Basic Components</h2>
        <div {...stylex.props(styles.iconWrapper)}>
          <Icon name="heart" size="small" color="default" />
          <Icon name="star" size="medium" color="success" />
          <Icon name="check" size="large" color="warning" />
        </div>
        <p>Using a Unicode-only implementation with no FontAwesome</p>
      </div>
      
      <div {...stylex.props(styles.row)}>
        <h2>Button Without Icon Import</h2>
        <Card>
          <Heading level={2}>Testing Button Component</Heading>
          <Text>This is a text component from stitch-extension</Text>
          <Button variant="primary">Primary Button</Button>
          <Button variant="default">Default Button</Button>
          <Button variant="critical">Critical Button</Button>
          <StitchKeyboard>Keyboard from stitch</StitchKeyboard>
        </Card>
      </div> */}
    </main>
  );
}
