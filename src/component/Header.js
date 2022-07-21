import {NavLink} from "react-router-dom"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text,IconButton,Button,Stack,Collapse,Icon,Link,Popover,PopoverTrigger,PopoverContent,
  useColorModeValue,useBreakpointValue,useDisclosure, Avatar,useColorMode} from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import icon from '../images/LaffahP.png'
  export default function WithSubnavigation() {
    const navgit = useNavigate()
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box boxShadow='xl' p='2' rounded='md'>
        <Flex
          bg={useColorModeValue('white')} 
          color={useColorModeValue('black', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Avatar
                    bg={''}
                    size={'lg'}
                    src={icon}
                  />
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={3}>
            <Button
              fontSize={'sm'}
              fontWeight={400}
              color='#6E3F8E'
              variant='outline'
              colorScheme= {'#6E3F8E'}
              as={NavLink}
              to="/Login"
              >
              تسجيل الدخول
            </Button>
            <Button
              fontSize={'sm'}
              fontWeight={500}
              bg={'#6E3F8E'}
              variant='solid'
              colorScheme= {'#6E3F8E'}
              as={NavLink} to="/Rigester"
              >
              إنشاء حساب
            </Button>
            <Button onClick={toggleColorMode} variant='ghost' colorScheme='white'>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
          </Stack>
        </Flex>
              
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('black')
    const popoverContentBgColor = useColorModeValue('white');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => ( 
          <Box key={navItem.label} as={NavLink} to={navItem.label == 'من نحن' ? "/About" : "/"}  >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
               
                <Button
                  p={4}
                  href={navItem.href ?? '#'}
                  fontSize={'md'}
                  fontWeight={400}
                  color={'black'}
                  variant='ghost'
                  colorScheme='#6E3F8E'
                 >
                  {navItem.label}
                </Button>
              
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={1}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={1}
        rounded={'sm'}
        _hover={{ bg: useColorModeValue('#BD8CED') }}>
        <Stack direction={'row'} align={'center'}>
          <Box >
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'black' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'#6E3F8E'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white')}
        p={4}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={400}
            color={useColorModeValue('black')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderRight={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'الرئيسية',
      href:"#",

    //   children: [
    //     {
    //       label: 'Explore Design Work',
    //       subLabel: 'Trending Design to inspire you',
    //       href: '#',
    //     },
    //     {
    //       label: 'New & Noteworthy',
    //       subLabel: 'Up-and-coming Designers',
    //       href: '#',
    //     },
    //   ],
    },
    {
      label: 'خدمات',
      children: [
        {
          label: 'المدن',
          subLabel: 'إكتشف المدن من منظور اخر !',
          href:"#",

          
        },
        {
          label: 'مرشدي السياحة',
          subLabel: 'تعرف على سكان المنطقة',
          href:"#",

        },
   
      ],
    },
      {
      label: 'من نحن',
      href:"/About",
   
    }
  
  
  ];