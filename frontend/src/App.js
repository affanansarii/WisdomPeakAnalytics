import './App.css';
import { Box, Container, VStack } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import PDFDownloadButton from './components/PDFDownloadButton';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import 'animate.css';

function App() {

  return (

    <Box bg="gray.100" p={4} textAlign="center">

      <Box m={4}>
        <Navbar />
      </Box>


      <Container maxW="container.md" p={4}>

        <VStack spacing={8}>
          <Box className="animate__animated animate__fadeInDown">
            <Header />
          </Box>
          <Box className="animate__animated animate__fadeInLeft">
            <ProfilePicture />
          </Box>
          <Box className="animate__animated animate__fadeInRight">
            <Timeline />
          </Box>
          <Box className="animate__animated animate__fadeInLeft">
            <Experience />
          </Box>
          <Box className="animate__animated animate__fadeInRight">
            <Education />
          </Box>
          <Box className="animate__animated animate__fadeInLeft">
            <Skills />
          </Box>
          <Box className="animate__animated animate__fadeInDown">
            <Portfolio />
          </Box>
        </VStack>

        <Box textAlign="center" mb={4} p={4}>

          <Hobbies />
          <Contact />
          <ContactForm />
          <PDFDownloadButton />

        </Box>

        <Box>
          <LocationMap />
        </Box>

      </Container>

    </Box>

  );

}

export default App;
