import { useState } from "react";
import { Container, VStack, Heading, Input, Button, Text, Box } from "@chakra-ui/react";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setError("");
    setSuccess("");
    if (!formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    // Dummy credentials
    const dummyEmail = "test@example.com";
    const dummyPassword = "password123";

    if (formData.email === dummyEmail && formData.password === dummyPassword) {
      setSuccess("Login successful!");
      setFormData({ email: "", password: "" });
      // Handle user session here
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <Container centerContent maxW="container.sm" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Login</Heading>
        {error && <Text color="red.500">{error}</Text>}
        {success && <Text color="green.500">{success}</Text>}
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <Input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            mb={2}
          />
          <Input
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            mb={2}
          />
          <Button colorScheme="teal" onClick={handleSubmit}>Login</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Login;