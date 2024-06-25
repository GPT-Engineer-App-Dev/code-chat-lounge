import { useState } from "react";
import { Container, VStack, Heading, Input, Button, Text, Box } from "@chakra-ui/react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("/api/register", formData);
      if (response.data.success) {
        setSuccess("Registration successful! You can now log in.");
        setFormData({ username: "", email: "", password: "" });
      } else {
        setError(response.data.message || "Registration failed.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Container centerContent maxW="container.sm" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Register</Heading>
        {error && <Text color="red.500">{error}</Text>}
        {success && <Text color="green.500">{success}</Text>}
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <Input
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            mb={2}
          />
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
          <Button colorScheme="teal" onClick={handleSubmit}>Register</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Register;