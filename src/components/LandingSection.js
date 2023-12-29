import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Abhiram Reddy!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} marginBottom={6}>
      <Avatar
        name="Abhiram Reddy"
        src="https://i.pravatar.cc/150?img=7"
        size="xl"
      />
      <Heading as="h4" size="sm">
        {greeting}
      </Heading>
    </VStack>
    <VStack spacing={3}>
      <Heading as="h2" size="xl">
        {bio1}
      </Heading>
      <Heading as="h2" size="xl">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
