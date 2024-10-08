import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack backgroundColor={"white"} borderRadius="lg" overflow="hidden">
      <Image src={imageSrc} />
      <Text color={"black"} alignSelf="start" ml={"10px"} fontWeight={"bold"} fontSize={"md"}>{title}</Text>
      <Text color={"grey"} ml={"8px"} mr={"5px"} mb={"5px"} fontSize={"small"}>{description}</Text>
      <HStack ml={"15px"} mb={"10px"} justifyContent="start" width="100%">
        <Text color={"darkblue"} fontSize={"small"}>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
