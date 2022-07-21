import {
  Stack,
  SimpleGrid,
  Box,
  Container,
  Input,
  Icon,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import City from './HomeCities';
import Alula from '../images/Alula/AlulaEle.jpg';
import Riyadh from '../images/alriyah.jpeg';
import Jeddah from '../images/jeddah.jpg';
import Abha from '../images/Abha.jpg';
import Newom from '../images/Newom.jpg';
import Qadia from '../images/AlQadiay.jpg';
import TheLine from '../images/TheLine.jpg';
import Yonbo from '../images/Yonbo.jpg';
import Jazzan from '../images/Jazaan.webp';
import Madinah from '../images/Madinah.jpg';
import Macca from '../images/Macca.jpg';
import Tabuk from '../images/Tabuk.jpg';
import Khobar from '../images/Khobar.jpg';

export default function Cities() {
  const citie = [
    {
      title: 'الرياض',
      img: Riyadh,
      disc: 'المدينة الجامعة بين الحداثة وعبق التاريخ',
    },
    {
      title: ' العلا ',
      img: Alula,
      disc: 'جوهرة أثرية ووجهة ثقافية',
    },
    {
      title: ' نيوم ',
      img: Newom,
      disc: ' أول المدن الإدراكية ',
    },
    {
      title: ' القدية ',
      img: Qadia,
      disc: ' مدينة الإلهام والاستكشاف والمرح ',
    },
    {
      title: ' جدة ',
      img: Jeddah,
      disc: 'مدينة ساحلية غرب المملكة العربية السعودية',
    },
    {
      title: ' أبها ',
      img: Abha,
      disc: 'المدينة المكسوةبالطبيعة الخضراء',
    },
    {
      title: ' تبوك ',
      img: Tabuk,
      disc: ' المدينة التاريخية ',
    },
    {
      title: ' الدمام ',
      img: Khobar,
      disc: ' لؤلؤة الصحرى ومنبع التاريخ ',
    },
    {
      title: ' ينبع ',
      img: Yonbo,
      disc: ' لؤلؤة البحر الاحمر و إحدى افضل موتقع  الغوص والشواطىء الرملية',
    },
    {
      title: ' ذا لاين ',
      img: TheLine,
      disc: ' ثورة في الحياة الحضرية ',
    },
    {
      title: ' المدينة المنورة ',
      img: Madinah,
      disc: ' أول عاصمة في التاريخ الإسلامي ',
    },
    {
      title: ' مكة المكرمة ',
      img: Macca,
      disc: ' مدينة غرب المملكة العربية السعودية ',
    },
    {
      title: ' جازان ',
      img: Jazzan,
      disc: ' واحة مميزة واستثنائية وسط الطبيعة ',
    },
  ];

  let [searsh, setSearch] = useState('');
  let [citySearch, setCitySearch] = useState(citie);
  let Change = e => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  useEffect(() => {
    setCitySearch(
      citie.filter(city =>
        city.title.toLowerCase().includes(searsh.toLowerCase())
      )
    );
  }, [searsh]);

  const CitiesList = citySearch.map(cities => <City city={cities} />);

  return (
    <div>
      <Box mr={3} ml={3} boxShadow={'xl'}>
        <Container
          as={Stack}
          maxW={'md'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={1}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Icon w={8} h={8} color="#6E3F8E" as={RiSearchLine} />
          <Input
            focusBorderColor="#6E3F8E"
            placeholder="بحث"
            onChange={Change}
          />
        </Container>
        <SimpleGrid minChildWidth="250px" spacing="20px" p={5}>
          {CitiesList}
        </SimpleGrid>
      </Box>
    </div>
  );
}
