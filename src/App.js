import {
  Header, Main, NavBar, NavItem, Hero, Section, Title,
  PageContent, ContentTitle, ContentDescription, Logos,
  Subtitle, Description, Button, Footer, HeroDescription, Cards
} from './components/all'
import Logo from './assets/logo.png'
import EventInfo from './assets/event_info.png'
import EventTimeline from './assets/event_timeline.png'
import EventActivities from './assets/event_activities.png'
import PreHackfest from './assets/pre-hackfest.jpeg'
import './App.css';

import ParticleBackground from 'react-particle-backgrounds'

import college1 from './assets/colleges/academia_logo.png'
import college2 from './assets/colleges/Amrit_sceince_logo.png'
import college3 from './assets/colleges/Apex-College.png'
import college4 from './assets/colleges/bhaktapur_multiple_campus.png'
import college5 from './assets/colleges/birendra_multiple_campus.png'
import college6 from './assets/colleges/butwal_multiple_campus.png'
import college7 from './assets/colleges/ICMS_samarpanacademy.png'
import college8 from './assets/colleges/Kathford-International-College-of-Engineering-and-Management.jpeg'
import college9 from './assets/colleges/Kathmandu_University_Logo.png'
import college10 from './assets/colleges/Kec_kalimati.jpg'
import college11 from './assets/colleges/logo-wrc.png'
import college12 from './assets/colleges/NCIT_LOGO.jpeg'
import college13 from './assets/colleges/Padma_kanya_logo.jpeg'
import college14 from './assets/colleges/pn_campus.png'
import college15 from './assets/colleges/sagarmatha_logo.png'
import college16 from './assets/colleges/sagarmatha_science_tech_logo.jpg'
import college17 from './assets/colleges/samriddhi-college-logo-nepal.jpeg'

import club1 from './assets/clubs/i-ces-logo.png'
import club2 from './assets/clubs/icmsym.png'
import club3 from './assets/clubs/kec it club.jpeg'
import club4 from './assets/clubs/KU_computer_club_logo.png'
import club5 from './assets/clubs/KU_open_sorce_circle_logo.png'
import club6 from './assets/clubs/NOSK_logo.png'
import club7 from './assets/clubs/osac_logo.jpeg'
import club8 from './assets/clubs/PK_IT_club_logo.jpeg'
import club9 from './assets/clubs/coesis_logo.png'

import org1 from './assets/orgs/HOT_OMH_Asia_Pacific_Logo_COLOUR.png'
import org2 from './assets/orgs/Humanitarian OpenStreetMap Team HOT Logo.png'
import org3 from './assets/orgs/KLL Logo.png'
import org4 from './assets/orgs/oknp.svg'
import org5 from './assets/orgs/open_tech_community_logo_for_white_bg.png'

import MapBG from './assets/map-osm.png'
import ImpactAreas from './assets/impact_areas.png'

import RobSavoye from './assets/Rob_savoye.jpeg'
import Petya from './assets/petya.jpeg'
import Ramya from './assets/ramya.png'
import Saurav from './assets/saurav.jpeg'
import Leen from './assets/leen.jpg'
import Nirab from './assets/nirab.jpeg'
import Ichchha from './assets/ichchha.jpeg'
import Kshitiz from './assets/kshitiz.png'
import Hel from './assets/hel.png'
import Nishan from './assets/nishan.jpeg'

const college_list = [college1,
college2,
college3,
college4,
college5,
college6,
college7,
college8,
college9,
college10,
college11,
college12,
college13,
college14,
college15,
college16,
college17
]
const club_list =[
  club1,
  club2,
  club3,
  club4,
  club5,
  club6,
  club7,
  club8,
  club9
]

const org_list = [
  org1,
  org2,
  org3,
  org4,
  org5
]

const mentors =[
  {avatar: RobSavoye, name: 'Rob Savoye', organization: 'Humanitarian OpenStreetMap Team', designation: 'Senior Technical Lead'},,
  // {avatar: Leen, name: 'Leen D’hondt', organization: 'Humanitarian OpenStreetMap Team', designation: 'Senior Product Development Manager'},
  {avatar: Ramya, name: 'Ramya Ragupathy', organization: 'Humanitarian OpenStreetMap Team', designation: 'Module Owner'},
  {avatar: Kshitiz, name: 'Kshitiz Sharma', organization: 'Humanitarian OpenStreetMap Team', designation: 'Backend Developer'},
  {avatar: Nirab, name: 'Nirab Pudasaini', organization: 'Open Mapping Hub - Asia Pacific', designation: 'Open Tech and Innovation Specialist'},
  // {avatar: Saurav, name: 'Saurav Bhattarai', organization: 'Kathmandu Living Labs', designation: 'Systems Architect and Engineer'},
  {avatar: Ichchha, name: 'Ichchha Moktan', organization: 'Kathmandu Living Labs', designation: 'Tech and Innovation Lead'},
  {avatar: Nishan, name: 'Nishan Aryal', organization: 'ICMS YouthMappers', designation: 'Community Lead'},
  {avatar: Hel, name: 'Hel Nershing Thapa', organization: 'Kathmandu Living Labs', designation: 'Frontend Engineer'},
]
const presenters =[
  {avatar: RobSavoye, name: 'Rob Savoye', organization: 'Humanitarian OpenStreetMap Team', designation: 'Senior Technical Lead'},
  {avatar: Ramya, name: 'Ramya Ragupathy', organization: 'Humanitarian OpenStreetMap Team', designation: 'Module Owner'},
  {avatar: Petya, name: 'Petya Kangalova', organization: 'Humanitarian OpenStreetMap Team', designation: 'Tech Collective Facilitator'},
  // {avatar: Ichchha, name: 'Ichchha Moktan', organization: 'Kathmandu Living Labs', designation: 'Tech and Innovation Lead'},
  // {avatar: Nirab, name: 'Nirab Pudasaini', organization: 'Open Mapping Hub - Asia Pacific', designation: 'Open Tech and Innovation Specialist'},
]

function App(props) {
  const settings4 = {
    particle: {
      particleCount: 100,
      color: "#d68c38",
      minSize: 2,
      maxSize: 4
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000
    }
  }
  const schedule_id = 'schedule'
  const pre_event_id = 'workshop'
  const workshop_form_link = 'https://docs.google.com/forms/d/1b4wnGVfSXz35qB76Q8anWIrQCtrHE67Jdy06ITbz3vE/edit'
  const registration_form_link = 'https://docs.google.com/forms/d/e/1FAIpQLSfHaH6JDEEl6Bct1032mdWmErJDF41ZDbrwTP34gQmNdnWjvg/viewform'
  return (
    <Main>
      <Header>
      <div style={{position:'absolute', width: '100%', height: 800, top:0, zIndex:0}}><ParticleBackground settings={settings4}/></div>

        <Hero style={{ backgroundImage: `url(${MapBG})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
        <NavBar logo={Logo}>
          <NavItem link={registration_form_link}>
            Registration
          </NavItem>
          <NavItem link={`#${schedule_id}`}>
            Schedule
          </NavItem>
          <NavItem link={`#${pre_event_id}`}>
            Workshop
          </NavItem>
        </NavBar>
          <Section>
            <Title>
              OSM Hackfest 2022
            </Title>
            <Subtitle>
              Open Technologies for Public Good
            </Subtitle>
            <small><small>OpenStreetMap | Free and Open Source Software | Open Data</small></small>
            <Description>
              Happening in Kathmandu, NP<br/>
              From June 20 to June 24<br/>
            </Description>
          </Section>
          <Section>
            <Button onClick={()=>window.location.href=registration_form_link}>
              Register
            </Button>
            <Button onClick={()=>window.location.href=`#${schedule_id}`}>
              Schedule
            </Button>
          </Section>
        </Hero>
        <HeroDescription>
          <ContentDescription>
            <div style={{margin:'auto', maxWidth:960}}>
              <h3>
                OSM hackfest 2022 is to building solutions using OpenStreetMap
                and other open data and open technologies for public good.
              </h3>
              <p>
                This is a national competition that aims students to:
                <ul>
                  <li>Utilize the free and open source geographical database of the world to build impactful civic tools and technologies.</li>
                  <li>Gain a deeper understanding to OSM & Open Technologies.</li>
                  <li>Showcase ideas and skillsets in regional scale.</li>
                </ul>
              </p>
            </div>
          </ContentDescription>
        </HeroDescription>
      </Header>
      <PageContent>
      <div style={{backgroundColor: '#eee'}}>
      <br/>
      <iframe style={{maxWidth: 804, width: '100%',  height: 452}} src="https://www.youtube.com/embed/I8qwqPypUrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br/>
      <br/>
      </div>
        <Section>
          <ContentTitle>
            <span id={schedule_id}>Hackfest Timeline & Activities</span>
          </ContentTitle>

          <ContentDescription>
            <img src={EventTimeline} style={{maxHeight: 450, paddingRight: 10, marginRight: 10, maxWidth: '100%'}}/>
          </ContentDescription>
          <br/>
          <div style={{backgroundColor: '#eee'}}>
          <br/>
          <h3 style={{color:'#333'}}>Impact Areas for Idea submission</h3>
          <p>
            You can submit yous ideas in any of the following Impact Areas
          </p>
          <img src={ImpactAreas} style={{maxHeight: 450, maxWidth: '100%'}}/>
          </div>
          <div>
          <h3 style={{color:'#333'}}>Main Event</h3>
          <ContentDescription>
            <img src={EventInfo} style={{maxHeight: 250, borderRight: '5px solid #4c5f84', paddingRight: 10, marginRight: 10, maxWidth: '100%'}}/>
            <img src={EventActivities} style={{maxHeight: 250, maxWidth: '100%'}}/>
          </ContentDescription>
          <br/>
          <Section bgColor="#eee">
          <br/>
          <h3 style={{color:'#333'}}>Mentors</h3>
          <ContentDescription>
            <Cards items={mentors}/>
            <br/>
          </ContentDescription>
          <Button onClick={()=>window.location.href=registration_form_link}>
            Submit idea for Hackfest
          </Button>
          <br/>
          <br/>
          </Section>
          </div>
        </Section>
        <Section>
          <ContentTitle>
            <span id={pre_event_id}>OSM Workshop (Pre-Event)</span>
          </ContentTitle>
          <ContentDescription>
            <h4 style={{color: '#555', fontWeight: 200, maxWidth: 720, margin: 'auto'}}>This interactive hands-on workshop cover ideas for development of Free and Open Source Software; introduction to OSM projects; contribution, extraction, analysis and visualisation of geospatial data.</h4>
            <div>
              <div style={{paddingTop:5}}><h3 style={{color: '#F56526'}}>Presenters</h3></div> {/*Rob Savoye, Petya Kangalova & Ramya Ragupathy<br/>*/}
              <Cards items={presenters}/>
              <br/>
            </div>
            <div style={{border: '2px solid #555', width: 'fit-content', margin:'auto', padding: 20, backgroundColor:'#eee', borderRadius:20}}>
            <b>Date and time:</b> June 7,  2022 - 10:00 AM to 4:00 PM<br/>
            <b>Location:</b> Hotel Himalaya (‪183471604‬) | OpenStreetMap<br/>
            </div>
            <br/>
            <br/>
            <ol style={{maxWidth: 720,margin:'auto', textAlign: 'left'}}>
            <div>Participation Note:</div>
              <li>We have limited seats for up to 60 participants. After you submit this form, we will contact you through email before the event with other details of the event.</li>
              <li>As the events will be hands on, participants are expected to bring their laptops for the event.</li>
            </ol>
            <br/>
            <b><i>Event registration is closed.</i></b>
            <br/>
            <br/>
            <div style={{width: '100%', maxWidth: 720, margin: 'auto'}}>
            The event happened successfully!! Thanks to our amazing presenters: Petya Kangalova, Ramya Ragupathy and Rob Savoye.
            <br/>
            <br/>
            <img src={PreHackfest} style={{width: '100%'}}/>
            </div>
            <br/>
            <Button onClick={()=>window.location.href=workshop_form_link} disabled>
              Apply for this workshop
            </Button>
            <br/>
            <br/>
          </ContentDescription>
        </Section>
        <Section bgColor="#eee">
          <ContentTitle>
            Participating Colleges
          </ContentTitle>
          <ContentDescription>
            <Logos items={college_list}/>
          </ContentDescription>
        </Section>
        <Section>
          <ContentTitle>
            Supporting Student Clubs
          </ContentTitle>
          <ContentDescription>
            <Logos items={club_list}/>
          </ContentDescription>
        </Section>
        <Section bgColor="#eee">
          <ContentTitle>
            Organizers
          </ContentTitle>
          <ContentDescription>
            <Logos items={org_list}/>
          </ContentDescription>
          <br/>
          <br/>
        </Section>
      </PageContent>
      <Footer>
        <span style={{padding: 10}}><b>Facebook Page: </b> <a style={{color:'white'}} href="https://fb.com/opentechcommunity">Open Tech Community</a></span>
        <span style={{padding: 10}}><b>Website: </b> <a style={{color:'white'}} href="https://osmhackfest.github.io">OSM Hackfest 2022</a></span>
        <span style={{padding: 10}}><b>Old Site: </b> <a style={{color:'white'}} href="https://osmhackfest.github.io/old-site">OSM Hackfest 2022</a></span>
      </Footer>
    </Main>
  );
}

export default App;
