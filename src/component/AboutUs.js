import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Link
  } from '@chakra-ui/react';
  import {NavLink} from "react-router-dom"
  import border from '../images/border.png'
  export default function About() {
    return (
      <Stack bg={'#'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#9caeb0',
                  zIndex: -1,
                }} color='#674591'>
                من نحن
              </Text>
              <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
               لفة توفر لك مجموعة من المرشدين من جميع مناطق المملكة مع عدة خدمات ونظم لك رحلتك بكل اريحية<br/> مرشد سياحي وحاب تنظم معنا او عميل وتحتاج احد يرتب لك رحلتك؟           
            </Text>
            <Stack direction={'center'} pr='190'>
              <Button
                rounded={'full'}
                bg={'#674591'}
                color={'white'}
                as={NavLink} to="/Rigester"
                _hover={{
                  bg: '#674591',
                }}>
               حياك معنا 
              </Button>
              {/* <Button rounded={'full'}>How It Works</Button> */}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            width={300}
            height={600}
            objectFit={'cover'}
            src={border}
          />
        </Flex>
      </Stack>
    );
  }