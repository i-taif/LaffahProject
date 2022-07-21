import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
export default function SimpleCard() {
const [formValue, setformValue] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async () => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append('username', formValue.username);
    loginFormData.append('password', formValue.password);

    try {
      // make axios post request
      const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/login',
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
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>تسجيل الدخول</Heading>
        </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white')}
            boxShadow={'lg'}
            p={20}
          >
             <form onClick={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel> اسم المستخدم</FormLabel>
                <Input
                  focusBorderColor='#6E3F8E'
                  textAlign="left"
                  type="text"
                  name="username"
                  value={formValue.username}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>كلمة المرور</FormLabel>
                <Input
                  focusBorderColor='#6E3F8E'
                  type="password"
                  textAlign="left"
                  name="password"
                  value={formValue.password}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>تذكرني</Checkbox>
                  <Link color={'#6E3F8E'}>نسيت كلمةالمرور؟</Link>
                </Stack>
                <Button
                  bg={'#6E3F8E'}
                  color={'white'}
                  _hover={{
                    bg: '#6E3F8E',
                  }}
                  as={NavLink}
                  to="/"
                >
                  تسجيل الدخول
                </Button>
              </Stack>
            </Stack>
            </form>
          </Box>
      </Stack>
    </Flex>
  );
}
