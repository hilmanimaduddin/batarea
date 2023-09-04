import { ChakraProvider } from "@chakra-ui/react";
import { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Document } from "~/Document";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Batarea" },
    {
      tagName: "link",
      rel: "icon",
      href: "https://res.cloudinary.com/dlcgwbdtv/image/upload/v1693580154/371028928_351862527376297_8705048868123806502_n_z7mzxl.jpg",
    },
    {
      property: "og:title",
      content: "Very cool app",
    },
    {
      name: "description",
      content: "This app is the best",
    },
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
  ];
};

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}
