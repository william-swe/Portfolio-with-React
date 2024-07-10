import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack backgroundColor={"white"} borderRadius="md" overflow="hidden">
      <Image src={imageSrc} />
      <Text color={"black"} alignSelf="start" ml={"8px"} fontWeight={"bold"} fontSize={"small"}>{title}</Text>
      <Text color={"grey"} ml={"8px"} mb={"8px"} fontSize={"x-small"}>{description}</Text>
      <HStack ml={"15px"} mb={"5px"} justifyContent="start" width="100%">
        <Text color={"black"} fontSize={"x-small"}>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
