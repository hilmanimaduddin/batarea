import { Box } from "@chakra-ui/react";
import NavBar from "~/module/Navbar";
import Gallery from "~/module/galery";

export default function Home() {
  return (
    <>
      <Box>
        <NavBar />
        <Gallery />
      </Box>
    </>
  );
}
