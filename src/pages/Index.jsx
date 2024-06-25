import { Container, VStack, Heading, Text, Box, Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePostSubmit = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, newPost]);
      setNewPost({ title: "", content: "" });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Tech Forum</Heading>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <Heading as="h2" size="md" mb={4}>Create a New Post</Heading>
          <Input
            placeholder="Title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            mb={2}
          />
          <Textarea
            placeholder="Content"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            mb={2}
          />
          <Button colorScheme="teal" onClick={handlePostSubmit}>Submit</Button>
        </Box>
        <Box width="100%" mt={8}>
          <Heading as="h2" size="lg" mb={4}>Posts</Heading>
          {posts.length === 0 ? (
            <Text>No posts yet. Be the first to post!</Text>
          ) : (
            posts.map((post, index) => (
              <Box key={index} p={4} borderWidth={1} borderRadius="lg" mb={4}>
                <Heading as="h3" size="md">{post.title}</Heading>
                <Text mt={2}>{post.content}</Text>
              </Box>
            ))
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;