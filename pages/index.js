import { Container, TextInput, PasswordInput, Button } from '@mantine/core';

export default function Home() {
  return (
    <Container size="xs" mt="lg">
      <form>
        <TextInput required label="Email" placeholder="your@email.com" mb={10} ></TextInput>
        <PasswordInput label="Password" mb={10} ></PasswordInput>
        <Button variant="gradient" gradient={{from: 'indigo', to: 'cyan'}} fullWidth >Sign in</Button>
      </form>
    </Container>
  )
}
