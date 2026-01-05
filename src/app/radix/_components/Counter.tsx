"use client";

import { useState } from "react";
import { Box, Button, Container, Flex, Text } from "@radix-ui/themes";
export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <Flex direction="column" gapY="4">
      <Text size="8" align="center">
        {count}
      </Text>
      <Flex direction="row" gap="4">
        <Button onClick={() => setCount((prev) => prev + 1)}>Increase</Button>
        <Button onClick={() => setCount((prev) => prev - 1)}>Decrease</Button>
      </Flex>
    </Flex>
  );
}
