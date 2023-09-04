import NavBar from "~/module/Navbar";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import Simple from "~/routes/nav";
import type { V2_MetaFunction } from "@remix-run/node";

export default function Home() {
  return (
    <>
      <NavBar />
      <Box>
        {/* <Flex
          w={"full"}
          h={"100vh"}
          backgroundImage={
            "url(https://res.cloudinary.com/dlcgwbdtv/image/upload/v1693582791/Desain_tanpa_judul_2_agdkoy.png)"
          }
          backgroundSize={"cover"}
          backgroundPosition={"right"}
        > */}
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} /*align={"flex-start"}*/ spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Keluarga indah Batarea...
            </Text>
            <Stack direction={"row"}>
              <Link to={`/galery`}>
                <Button
                  bg={"blue.400"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                >
                  Mau tahu lebih banyak?
                </Button>
              </Link>
            </Stack>
          </Stack>
        </VStack>
        {/* </Flex> */}
      </Box>
    </>
  );
}
