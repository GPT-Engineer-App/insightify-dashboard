import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack, Grid, GridItem, IconButton, Textarea, Select } from "@chakra-ui/react";
import { FaHome, FaList, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" h="100vh">
        <TopNavBar />
        <Flex flex={1} overflow="auto">
          <DashboardHome />
        </Flex>
      </Flex>
    </Container>
  );
};

const TopNavBar = () => {
  return (
    <Flex bg="gray.100" p={4} justifyContent="space-between" alignItems="center">
      <Heading size="md">User Insight Dashboard</Heading>
      <Flex>
        <IconButton icon={<FaHome />} aria-label="Home" m={2} />
        <IconButton icon={<FaList />} aria-label="Interviews" m={2} />
        <IconButton icon={<FaChartBar />} aria-label="Analytics" m={2} />
        <IconButton icon={<FaCog />} aria-label="Settings" m={2} />
        <IconButton icon={<FaSignOutAlt />} aria-label="Logout" m={2} />
      </Flex>
    </Flex>
  );
};

const DashboardHome = () => {
  return (
    <VStack spacing={4} align="stretch" p={4}>
      <Heading size="lg">Recent Interviews</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {Array.from({ length: 6 }, (_, i) => (
          <GridItem key={i} bg="gray.50" p={4} borderRadius="md" shadow="md">
            <Text fontWeight="bold">Project {i + 1}</Text>
            <Text fontSize="sm">Date: 2023-09-15</Text>
            <Text fontSize="sm">Insights: 5</Text>
            <Button mt={3} colorScheme="blue">
              View Details
            </Button>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default Index;
