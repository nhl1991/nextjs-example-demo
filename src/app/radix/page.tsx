import { Button, Text, Flex, Box, Heading, Code } from "@radix-ui/themes";
import Counter from "./_components/Counter";
import Keyboard from "./_components/Keyboard";
import RadixLink from "./_components/Link";

export default function Page() {
  return (
    <main className="w-screen h-screen py-24 flex items-center justify-center">
      <div className="max-w-7xl">
        <Flex direction="column" gap="8">
          <Text>Hello from Radix Themes :)</Text>

            <Counter />
            <Keyboard />
            <RadixLink />
          <Box>A</Box>
          <Heading as="h2">Text-Size</Heading>
          <Flex direction="row" gap="4">
            <Text size="1">Aa</Text>
            <Text size="2">Aa</Text>
            <Text size="3">Aa</Text>
            <Text size="4">Aa</Text>
            <Text size="5">Aa</Text>
          </Flex>
          <Heading as="h2">CODE</Heading>
          <Flex maxWidth="200px">
            <Code truncate>
              linear-gradient(red, orange, yellow, green, blue);
            </Code>
          </Flex>
        </Flex>
      </div>
    </main>
  );
}
