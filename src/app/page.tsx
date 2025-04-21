"use client";

import { Button, Stack, Text } from "@bonterratech/stitch-extension";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <Stack space="600">
        <Text variant="heading1">Welcome to Stitch</Text>
        <Text>This is a Next.js app with Stitch component library</Text>
        <Button variant="primary" onPress={() => alert("Button clicked!")}>
          Click Me
        </Button>
      </Stack>
    </main>
  );
}
