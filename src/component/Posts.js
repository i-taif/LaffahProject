import {
SimpleGrid
} from '@chakra-ui/react';
import PostTemp from './PostTemp'
import AlulaA from '../images/Alula/Alula.jpg'
import AlulaB from '../images/Alula/AlUla3.jpg'
import AlulaC from '../images/Alula/AlUla6.jpg'
import AlulaD from '../images/Alula/AlUla7.jpg'
import AlulaE from '../images/Alula/AlUla8.jpg'
import AlulaF from '../images/Alula/AlUla9.jpg'
import AlulaG from '../images/Alula/AlUla10.jpg'
import AlulaH from '../images/Alula/AlulaEle.jpg'
import AlulaI from '../images/Alula/AlulaEle2.jpg'
import AlulaJ from '../images/Alula/alulaElphent.jpg'
import AlulaK from '../images/Alula/AlUlaTelscop.jpg'
export default function Posts() {
      const AlulaActi = [
        {
          title: 'شتاء طنطورة',
          img: AlulaA,
          disc:'المدينة الجامعة بين الحداثة وعبق التاريخ',
          date: "Feb 08, 2021",
          TourGuide:  'جنى محمد'
        },
        {
            title: 'شتاء طنطورة',
            img: AlulaB,
            disc:'المدينة الجامعة بين الحداثة وعبق التاريخ',
            date: "Feb 08, 2021",
            TourGuide: 'جنى محمد'
        },
        {
            title: 'شتاء طنطورة',
            img: AlulaC,
            disc:'المدينة الجامعة بين الحداثة وعبق التاريخ',
            date: "Feb 10, 2021",
            TourGuide:  'جنى محمد'
        },
        {
            title: 'شتاء طنطورة',
            img: AlulaD,
            disc:'المدينة الجامعة بين الحداثة وعبق التاريخ',
            date: "Feb 09, 2021",
            TourGuide:  'جنى محمد'
        },
        {
            title: 'شتاء طنطور',
            img: AlulaE,
            disc:'المدينة الجامعة بين الحداثة وعبق التاريخ',
            date: "Feb 16, 2021",
            TourGuide:  'جنى محمد'
        },
        {
            title: 'شتاء طنطور',
            img: AlulaF,
            disc:'المدينة الجامعة بين الحداثة وعبق التاريخ',
            date: "Feb 08, 2021",
            TourGuide:  'جنى محمد'
        },
        {
            title: 'شتاء طنطور',
            img: AlulaG,
            disc:'المدينة الجامعة بين الحداثة وعبق التاريخ',
            date: "Feb 20, 2021",
            TourGuide:  'جنى محمد'
        },
        {
            title: 'شتاء طنطور',
            img: AlulaH,
            disc:'المدينة الجامعة بين الحداثة وعبق التاريخ',
            date: "Feb 25, 2021",
            TourGuide:  'جنى محمد'
        },
        {
            title: 'انشطة ',
            img: AlulaI,
            disc:'مشاهدة الجمال وتجربة امتطائها',
            date: "Feb 23, 2021",
            TourGuide:  'جنى محمد'
        },
        {
            title: 'جبل الفيل',
            img: AlulaJ,
            disc:'المدينة الجامعة بين الحداثة وعبق التاريخ',
            date: "Feb 23, 2021",
            TourGuide:  'جنى محمد'
        },
        {
            title: 'انشطة',
            img: AlulaK,
            disc:'مشاهدة النجوم بالتلسكوب',
            date: "Feb 24, 2021",
            TourGuide: 'جنى محمد'
        },
      ];
      const AlulaActiList = AlulaActi.map(i => <PostTemp alula={i} />);
  return (
    <SimpleGrid minChildWidth="250px" spacing="20px" p={5}>
          {AlulaActiList}
        </SimpleGrid>
  );
}