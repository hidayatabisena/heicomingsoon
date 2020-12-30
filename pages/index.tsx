import { Box, Heading, Flex, Image, Text } from '@chakra-ui/core';
import Layout from 'components/Layout';

// Chakra UI default breakpoints are set as "min-width" array values in Chakra theme
// breakpoints: ["30em", "48em", "62em", "80em"]
function HomePage() {
  return (
    <Layout>
      <Flex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex alignItems="start" ml={[0, 0, 0, '-8%']}>
          <Image
            maxW={['auto', 'auto', 'auto', '52em']}
            src="https://res.cloudinary.com/moyadev/image/upload/v1609313120/Moyadev/heiacademy.png"
          />
        </Flex>
        <Flex flexDirection="column" m={8}>
          <Flex alignItems="center" h={['auto', 'auto', 'auto', '32em']}>
            <Heading>
              Segera hadir{' '}
              <Text color="brand.300" as="span">
                HEI Academy
              </Text>{' '}
              <Text color="brand.300" as="span">
                official website
              </Text>
            </Heading>
          </Flex>
          <Box mb={8}>
            <Heading mb={8}>Hei Academy Indonesia</Heading>
            <Text>
              Platform penyedia Kelas Online Psikologi bagi Milenial.
              💡Millenial's support system. Saat ini website kami sedang dalam proses 
              pengembangan. 
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}

export default HomePage;
