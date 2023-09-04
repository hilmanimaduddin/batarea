import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
  TabPanel,
  Select,
  Flex,
  Grid,
  GridItem,
  Image,
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { json } from "@remix-run/node";
import { Link } from "@remix-run/react";

function Data() {}

export default function OrderCancel() {
  return (
    <>
      <Box>
        <Grid
        // templateAreas={`"nav main"`}
        // gridTemplateRows={"50px 1fr 30px"}
        // gridTemplateColumns={"150px 1fr"}
        // gap="2"
        >
          <GridItem
            // borderRight={"2px"}
            area={"nav"}
            borderRight="1px"
            borderRightColor={"ButtonText"}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
          >
            <Flex flexDirection={"column"} gap={5} fontSize={"20px"}>
              <Link to={"#"}>Dashboard</Link>
              <Link to={"#"}>Pesanan</Link>
              <Link to={"#"}>Produk</Link>
              <Link to={"#"}>Pengaturan</Link>
            </Flex>
          </GridItem>
          <GridItem pl="2" area={"main"}>
            <Box>
              <Text>Daftar Pesanan</Text>
              <Box>
                <Tabs isFitted variant="enclosed">
                  <TabList mb="1em">
                    <Tab>Semua</Tab>
                    <Tab>Belum Dibayar</Tab>
                    <Tab>Pesanan Baru</Tab>
                    <Tab>Siap Dikirim</Tab>
                    <Tab>Dalam Pengiriman</Tab>
                    <Tab>Pesanan Selesai</Tab>
                    <Tab>Dibatalkan</Tab>
                  </TabList>
                  <Box display={"flex"} gap={4}>
                    <InputGroup width={"180%"}>
                      <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.300" />
                      </InputLeftElement>
                      <Input type="text" placeholder="Cari Pesanan" />
                    </InputGroup>
                    <Select placeholder="Kurir">
                      <option value="option1">Kurir Baru</option>
                      <option value="option2">Kurir Lama</option>
                      <option value="option3">Pengangguran</option>
                    </Select>
                    <Select placeholder="Urutkan">
                      <option value="option1">Berdasarkan Waktu</option>
                      <option value="option2">Berdasarkan Kurir</option>
                      <option value="option3">Berdasarkan Tempat</option>
                    </Select>
                  </Box>
                  <TabPanels>
                    <TabPanel>
                      <Card
                        // direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        p={3}
                      >
                        <Stack>
                          <Box
                            borderBottom={"1px"}
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Box>
                              <Text>Belum Dibayar</Text>
                              <Text>INV/20230809/MPL/000000239</Text>
                            </Box>
                            <Button>Hubungi penjual</Button>
                          </Box>
                          <Grid
                            templateAreas={`"nav main"`}
                            // gridTemplateRows={"50px 1fr 30px"}
                            gridTemplateColumns={"100px 1fr"}
                            gap="2"
                          >
                            <GridItem area={"nav"}>
                              <Image
                                borderRadius={4}
                                objectFit="cover"
                                maxW={{ base: "100%", sm: "100px" }}
                                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                                alt="Caffe Latte"
                              />
                            </GridItem>
                            <GridItem area={"main"}>
                              <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                              >
                                <Box>
                                  <Text>Kaos Oblong</Text>
                                  <Text>1 Barang</Text>
                                </Box>
                                <Box>
                                  <Text>Total Belanja</Text>
                                  <Text>Rp65.000</Text>
                                </Box>
                              </Box>
                            </GridItem>
                          </Grid>
                        </Stack>
                      </Card>
                    </TabPanel>
                    <TabPanel>
                      <p>Belum Dibayar</p>
                    </TabPanel>
                    <TabPanel>
                      <p>Pesanan Baru</p>
                    </TabPanel>
                    <TabPanel>
                      <p>Siap Dikirim</p>
                    </TabPanel>
                    <TabPanel>
                      <p>Dalam Pengiriman</p>
                    </TabPanel>
                    <TabPanel>
                      <p>Pesanan Selesai</p>
                    </TabPanel>
                    <TabPanel>
                      <Card
                        // direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        p={3}
                      >
                        <Stack>
                          <Box
                            borderBottom={"1px"}
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Box>
                              <Button
                                height={"30px"}
                                color={"white"}
                                backgroundColor={"red"}
                              >
                                Dibatalkan
                              </Button>
                              <Text color={"gray"}>
                                INV/20230809/MPL/000000239
                              </Text>
                            </Box>
                            <Button>Hubungi penjual</Button>
                          </Box>
                          <Grid
                            templateAreas={`"nav main"`}
                            // gridTemplateRows={"50px 1fr 30px"}
                            gridTemplateColumns={"70px 1fr"}
                            gap="2"
                          >
                            <GridItem area={"nav"}>
                              <Image
                                borderRadius={4}
                                objectFit="cover"
                                h={{ base: "100%", sm: "60px" }}
                                maxW={{ base: "100%", sm: "60px" }}
                                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                                alt="Caffe Latte"
                              />
                            </GridItem>
                            <GridItem area={"main"}>
                              <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                              >
                                <Box>
                                  <Text>Kaos Oblong</Text>
                                  <Text>1 Barang</Text>
                                </Box>
                                <Box>
                                  <Text color={"gray"}>Total Belanja</Text>
                                  <Text>Rp65.000</Text>
                                </Box>
                              </Box>
                            </GridItem>
                          </Grid>
                        </Stack>
                      </Card>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
