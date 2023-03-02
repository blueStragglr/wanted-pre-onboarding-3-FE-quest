import { Button, VStack } from "@chakra-ui/react";

export default function Sidebar() {
    return (
        <VStack>
            <Button as='a' href='a'>Page A</Button>
            <Button as='a' href='b'>Page B</Button>
            <Button as='a' href='c'>Page C</Button>
        </VStack>
    )
}