import { Box, HStack, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box>
      <Box maxW={"container.xl"} m={"0 auto"}>
        <Box
          py={4}
          m={4}
          borderTopColor={"whiteAlpha.100"}
          borderTopWidth={1}
          textAlign={"end"}
        >
          <Text color="primary.400" fontSize={"sm"}>
            Feito com ♥ por{" "}
            <Link
              isExternal={true}
              href={"https://twitch.tv/flaviojmendes"}
              color={"primary.500"}
              _hover={{ textDecoration: "underline" }}
            >
              flaviojmendes
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
