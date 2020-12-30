import { Box, Link } from '@chakra-ui/core';

export default function Layout(props: any) {
  return (
    <>
      <Box>
        <Box margin="auto" width={{ sm: 'full', md: '80em' }} minH="100vh">
          {props.children}
        </Box>
        <Box mb={4} textAlign="center">
          HEI Academy{' '}
          <Link href="https://www.instagram.com/heiacademy.id/?hl=en" color="orange.400">
          🔎#TheBestVersionofMyself
          </Link>
        </Box>
      </Box>
    </>
  );
}
