import React, { useState } from "react";
import { Container, VStack, Textarea, Button, Text, Heading, useToast } from "@chakra-ui/react";
import { FaLanguage } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const toast = useToast();

  const handleTranslate = () => {
    if (!inputText.trim()) {
      toast({
        title: "No input provided",
        description: "Please enter some text to translate.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // Simulating translation
    setTranslatedText(inputText.split("").reverse().join("")); // Simple reverse as mock translation
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl">
          CrewAI E2B Translator
        </Heading>
        <Textarea placeholder="Enter English text here..." value={inputText} onChange={(e) => setInputText(e.target.value)} size="lg" />
        <Button leftIcon={<FaLanguage />} colorScheme="blue" onClick={handleTranslate} size="lg">
          Translate
        </Button>
        <Text fontSize="lg" fontWeight="bold">
          Translated Text (Bengali):
        </Text>
        <Text p={4} borderWidth="1px" borderRadius="lg" width="100%" minHeight="100px" backgroundColor="gray.100">
          {translatedText || "Translation will appear here..."}
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
