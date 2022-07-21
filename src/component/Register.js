import {
  Button,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  Text,
  useControllableState,
  useColorModeValue
} from '@chakra-ui/react';
import SA from '../images/SA-pl.jpg'
import Laffah from '../images/LaffahP.png'
import React, { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
 function Rigester() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setformValue] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append('first_name', formValue.first_name);
    loginFormData.append('last_name', formValue.last_name);
    loginFormData.append('username', formValue.username);
    loginFormData.append('email', formValue.email);
    loginFormData.append('password', formValue.password);

    try {
      // make axios post request
      const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/register',
        data: loginFormData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
        <Image
          alt={'Laffah Image'}
          width={200}
          src={Laffah}
        />
        <Box
        boxShadow='base'
         p='12' 
         rounded='lg'
         bg={useColorModeValue('white')}
          >
          <Heading fontSize={'2xl'} color={'#6E3F8E'}>تسجيل جديد</Heading>
          <br></br>
          <form onClick={handleSubmit}>
            <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>الاسم الاول</FormLabel>
                  <Input focusBorderColor='#6E3F8E' type="text" name="first_name" value={formValue.first_name} onChange={handleChange}  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>الاسم الاخير</FormLabel>
                  <Input focusBorderColor='#6E3F8E' type="text" name="last_name" value={formValue.last_name} onChange={handleChange} />
                </FormControl>
            </Box>
            <FormControl id="email" isRequired>
              <FormLabel> البريد الالكتروني </FormLabel>
              <Input
              focusBorderColor='#6E3F8E'
                textAlign="left"
                type="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="username" isRequired>
              <FormLabel>اسم المستخدم</FormLabel>
              <Input
              focusBorderColor='#6E3F8E'
                textAlign="left"
                type="text"
                name="username"
                value={formValue.username}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>كلمة المرور</FormLabel>
              <InputGroup>
                <Input
                focusBorderColor='#6E3F8E'
                  textAlign="left"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formValue.password}
                  onChange={handleChange}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack pt={6}>
            <Text align={'center'}>
           بالتسجيل أقر بأني قرأت  <Link  as={NavLink} to="/Login" color={'#6E3F8E'}>شروط الاستخدام </Link> و <Link color={'#6E3F8E'} as={NavLink} to="/Login">  سياسية الخصوصية </Link> وأوافق عليه
            </Text>
          </Stack>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'#6E3F8E'}
                color={'white'}
                _hover={{
                  bg: '#6E3F8E',
                }}
                as={NavLink}
                to="/Login"
              >
                تسجيل
              </Button>
            </Stack>
          </form>
          <Stack pt={6}>
            <Text align={'center'}>
              لديك حساب؟ <Link  as={NavLink} to="/Login" color={'#6E3F8E'}>تسجيل دخول</Link>
            </Text>
          </Stack>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            SA
          }
        />
      </Flex>
    </Stack>
  );
}
export default Rigester