import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import Header from '../components/header';
import Center from '../components/center';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <Container maxW={'full'} p={0}>
      <Header/>
      <Center/>
      <Footer/>
    </Container>
  )
}

export default Home
