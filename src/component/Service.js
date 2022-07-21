import React from 'react'
import {
    Stack,
    Flex,
    Box,
    Icon,
    Divider,
    Heading,
  } from '@chakra-ui/react';
export default function Service(props) {
  return (
        <Box w={'full'} boxShadow="base">
          <Flex justify={'center'} p={5}>
            <Icon as={props.serv.icon} w={20} h={20} color="#6E3F8E" />
          </Flex>
          <Divider />
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={2}>
              <Heading fontSize={'md'} fontWeight={500} fontFamily={'body'}>
              {props.serv.title}
              </Heading>
            </Stack>
          </Box>
        </Box>
        // </SimpleGrid>
        )}