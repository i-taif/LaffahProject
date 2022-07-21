import React from 'react'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';
export default function PostTemp(props) {
  return (
<Box
        maxW={'600px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'300px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            w={'full'}
            h={'full'}
            src={props.alula.img}
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Text
            color={'#674591'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {props.alula.title}
          </Text>
          <Text color={'gray.500'}>
          {props.alula.disc}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{props.alula.TourGuide}</Text>
            <Text color={'gray.500'}>{props.alula.date} </Text>
          </Stack>
        </Stack>
      </Box>
  )
}
