import { Box } from "@chakra-ui/react";
import { V2_MetaFunction } from "@remix-run/react";
import NavBar from "~/module/Navbar";
import Footer from "~/module/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Box>haloooo responsif</Box>
      <Footer />
    </>
  );
}
