import { Box, Link } from '@chakra-ui/core';

export default function Layout(props: any) {
  return (
    <>
      <Box>
        <Box margin="auto" width={{ sm: 'full', md: '80em' }} minH="100vh">
          {props.children}
        </Box>
        <Box mb={4} textAlign="center">
          Page by{' '}
          <Link href="https://twitter.com/kalleraus" color="orange.400">
            Kalle Raus
          </Link>
        </Box>
      </Box>
    </>
  );
}
