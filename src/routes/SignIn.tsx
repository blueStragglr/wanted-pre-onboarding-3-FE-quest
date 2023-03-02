import { Text, Button, Heading, HStack, Input, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form"

interface ISignInVariables {
    username: string;
    password: string;
}

export default function SignIn() {

    const { register, handleSubmit, reset } = useForm<ISignInVariables>();

    const onSubmit = (data: ISignInVariables) => {
        console.log(data);
        reset();
    }

    return (
        <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
            <Heading>Sign In</Heading>
            <HStack>
                <Text>Username</Text>
                <Input {...register("username", { required: true })} type={"text"} placeholder="username" />
            </HStack>
            <HStack>
                <Text>Password</Text>
                <Input {...register("password", { required: true })} type={"password"} placeholder="password" />
            </HStack>
            <Button type='submit'>Sign in</Button>
        </VStack>
    );
}