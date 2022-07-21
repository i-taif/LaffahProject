import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  SimpleGrid,
  Box,
  Container,
  Link
} from '@chakra-ui/react';
import {NavLink} from "react-router-dom"
import Alula from '../images/Alula/AlulaEle.jpg'
import Riyadh from '../images/alriyah.jpeg';
import Jeddah from '../images/jeddah.jpg'
import Abha from '../images/Abha.jpg'
import HomeBackground from '../images/Alula/AlUla2.jpg';
import { MdGTranslate, MdCameraEnhance } from 'react-icons/md';
import { FaRegHandshake } from 'react-icons/fa';
import { AiOutlineCar, AiOutlineWechat } from 'react-icons/ai';
import Service from './Service';
import City from './HomeCities'
export default function Home() {
  const services = [
    {
      title: 'خدمات التنقل',
      icon: AiOutlineCar,
    },
    {
      title: ' خدمة الاستقبال والترحيب',
      icon: FaRegHandshake,
    },
    {
      title: 'خدمة الترجمة',
      icon: MdGTranslate,
    },
    {
      title: 'خدمات الاستشارت',
      icon: AiOutlineWechat,
    },
    {
      title: 'أنشطة سياحية',
      icon: MdCameraEnhance,
    },
  ];
  const cities = [
    {
      title: 'الرياض',
      img: Riyadh,
      disc:'المدينة الجامعة بين الحداثة وعبق التاريخ'
    },
    {
      title: ' العلا ',
      img: Alula,
      disc: 'جوهرة أثرية ووجهة ثقافية'
    },
    {
      title: ' جدة ',
      img: Jeddah,
      disc:'مدينة ساحلية غرب المملكة العربية السعودية'
    },
    {
      title: ' أبها ',
      img: Abha,
      disc:'المدينة المكسوةبالطبيعة الخضراء'
    }
  ];
  const servicesList = services.map(service => <Service serv={service} />);
  const citiesList = cities.map(city => <City city={city} />);

  return (
    <div>
      <Flex
        w={'full'}
        h={'70vh'}
        backgroundImage={HomeBackground}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            >
              معك لحجز رحلتك القادمة
            </Text>
            <Stack direction={'row'} pr={135}>
              <a href='#cities'>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.300' }}
              >
                الوجهات
              </Button>
              </a>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <SimpleGrid minChildWidth="120px" spacing="20px" p={5}>
        {servicesList}
      </SimpleGrid>

      <Box  id='cities' boxShadow='base' m={4} rounded={'md'}>
        <Container   
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
         <Text fontSize={'lg'}>
      <b>دليلك لوجهات السياحة الداخلي</b>
      </Text>
      <Link as={NavLink} to='/Cities'>
      <Text> <b> عرض المزيد</b></Text>
      </Link>
      </Container>
      <SimpleGrid minChildWidth="120px" spacing="20px" p={5}>
        {citiesList}
      </SimpleGrid>
      </Box>

      {/* <SimpleGrid minChildWidth="120px" spacing="20px" p={5}>
        <Box w={'full'} boxShadow="base">
          <Flex
            w={'full'}
            h={'70vh'}
            backgroundImage={Riyadh}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
          >
            <VStack
              w={'full'}
              justify={'end'}
              px={useBreakpointValue({ base: 4, md: 8 })}
              bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
            >
              <Stack maxW={'2xl'} spacing={6}>
                <Text
                  color={'white'}
                  fontWeight={500}
                  lineHeight={1.2}
                  fontSize={'xl'}
                  align="center"
                >
                  الرياض <br />
                  <br />
                  المدينة الجامعة بين الحداثة وعبق التاريخ <br /> ٌ
                </Text>
              </Stack>
            </VStack>
          </Flex>
        </Box>
        <Box w={'full'} boxShadow="base">
          <Flex
            w={'full'}
            h={'70vh'}
            backgroundImage={HomeBackground}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
          ></Flex>
        </Box>
      </SimpleGrid> */}

      {/* <SimpleGrid minChildWidth="120px" spacing="20px" p={5}>
        <Box w={'full'} boxShadow="base">
          <Flex justify={'center'} p={5}>
            <Icon as={AiOutlineCar} w={20} h={20} color="#6E3F8E" />
          </Flex>
          <Divider />
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={2}>
              <Heading fontSize={'lg'} fontWeight={500} fontFamily={'body'}>
                خدمات التنقل
              </Heading>
            </Stack>
          </Box>
        </Box>
        <Box w={'full'} boxShadow="base">
          <Flex justify={'center'} p={5}>
            <Icon as={FaRegHandshake} w={20} h={20} color="#6E3F8E" />{' '}
          </Flex>
          <Divider />
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={2}>
              <Heading fontSize={'lg'} fontWeight={500} fontFamily={'body'}>
                خدمة الاستقبال والترحيب 
              </Heading>
            </Stack>
          </Box>
        </Box>
        <Box w={'full'} boxShadow="base">
          <Flex justify={'center'} p={5}>
            <Icon as={AiOutlineCar} w={20} h={20} color="#6E3F8E" />
          </Flex>
          <Divider />
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={2}>
              <Heading fontSize={'lg'} fontWeight={500} fontFamily={'body'}>
                خدمة الترجمة
              </Heading>
            </Stack>
          </Box>
        </Box>
        <Box w={'full'} boxShadow="base">
          <Flex justify={'center'} p={5}>
            <Icon as={AiOutlineCar} w={20} h={20} color="#6E3F8E" />
          </Flex>
          <Divider />
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={2}>
              <Heading fontSize={'lg'} fontWeight={500} fontFamily={'body'}>
              خدمة الاستشارات
              </Heading>
            </Stack>
          </Box>
        </Box>
        <Box w={'full'} boxShadow="base">
          <Flex justify={'center'} p={5}>
            <Icon as={AiOutlineCar} w={20} h={20} color="#6E3F8E" />
          </Flex>
          <Divider />
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={2}>
              <Heading fontSize={'lg'} fontWeight={500} fontFamily={'body'}>
              أنشطة سياحية 
              </Heading>
            </Stack>
          </Box>
        </Box>
      </SimpleGrid> */}
    </div>
  );
}
