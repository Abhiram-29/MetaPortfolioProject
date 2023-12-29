import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <>
    <VStack
      backgroundColor="whitesmoke"
      color="black"
      padding="6"
      maxWidth="800px"
      maxHeight="560px"
      borderRadius="xl"
      align="flex-start"
      spacing="4"
    >
      <Image src={imageSrc} size="xl" alt="coverImg"/>
      <Heading as="h4" size="md">{title}</Heading>
      <Text color="blackAlpha.600" fontSize="sm">{description}</Text>
      <HStack>
        <Text fontSize='sm'>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
    </>;
};

export default Card;
