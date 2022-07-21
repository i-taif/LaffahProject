import React from 'react';
import { Stack, Flex, Box, Text, VStack, useBreakpointValue} from '@chakra-ui/react';
import TourGuide from './TourGuide'
export default function Service(props) {
  return (
    // <SimpleGrid minChildWidth="120px" spacing="20px" p={5}>
    <a href='/TourGuide'>
      <Box w={'full'} boxShadow="base" rounded={9}>
        <Flex
          w={'full'}
          h={'70vh'}
          backgroundImage={props.city.img}
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
          rounded={9}
          _hover={{h:"71vh"}}
        >
          <VStack
            w={'full'}
            justify={'end'}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
            rounded={9}
          >
            <Stack maxW={'2xl'} spacing={6}>
              <Text
                color={'white'}
                fontWeight={500}
                lineHeight={1.2}
                fontSize={'xl'}
                align="center"
              >
                {props.city.title} <br />
                <br />
                {props.city.disc}
                <br /> <br/>
              </Text>
            </Stack>
          </VStack>
        </Flex>
      </Box>
      </a>

    // </SimpleGrid>
  );
}
