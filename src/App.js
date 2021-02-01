import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Container2 from './components/Container2';
import Footer from './components/Footer';

import SubContainerExp from './components/sub-components/Experiences';
import SubContainerSkills from './components/sub-components/SkillsAndInterest';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Container 
      backgroundImage='./img/engku_nazri.PNG'
      hrefLink=''
      stylingType=''
      headingText='Engku Nazri Bin Engku Nasir'
      descriptionText='Full stack developer who experience on various projects and interest on working as team for software development.'
      smallText=''
      />
      <Container2 
      backgroundImage='./img/developing_bg.jpg'
      hrefLink=''
      stylingType=''
      headingText='Software Engineer'
      descriptionText='A Software Engineer who graduated from University Malaysia Sarawak'
      smallText=''
      />
      <Container2 
      backgroundImage=''
      hrefLink=''
      stylingType=''
      headingText='Experience'
      descriptionText='Internship at Rich Core Media | Freelancing Programmer'
      smallText='Every journey helps us to be an better mankind'
      >
        <SubContainerExp />
      </Container2>
      <Container2 
      backgroundImage='./img/two_developer.jpg'
      hrefLink=''
      stylingType=''
      headingText='Skills and Interest'
      descriptionText='API Development | Web Developement | Back-End Developement | Cloud Computing'
      smallText=''
      >
        <SubContainerSkills />
      </Container2>
      <Container2 
      backgroundImage=''
      hrefLink=''
      stylingType=''
      headingText='Artwork'
      descriptionText='Work hard in silence, let your success be your noise.'
      smallText='Check out my project and repository in GitHub'
      />
      <Footer />
    </div>
  );
}

export default App;