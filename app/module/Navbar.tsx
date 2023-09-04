import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";

const LinksTo = [
  { name: "Home", link: "" },
  { name: "Galery", link: "galery" },
];

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                width={"50px"}
                borderRadius={"full"}
                src="https://res.cloudinary.com/dlcgwbdtv/image/upload/v1693580154/371028928_351862527376297_8705048868123806502_n_z7mzxl.jpg"
                alt=""
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {LinksTo.map((link, index) => (
                <Box key={index} fontWeight={"bold"}>
                  <Link to={`/${link.link}`}>{link.name}</Link>
                </Box>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {LinksTo.map((link, no) => (
                <Link to={`/${link.link}`} key={no}>
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
