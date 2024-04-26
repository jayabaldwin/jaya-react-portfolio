import * as React from 'react';
import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useMediaQuery } from '@mui/material';
import * as Scroll from "react-scroll";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import RightSocial from './RightSocial.jsx';
import Logo from '../../assets/images/jaya-logo.png';


const Navigation = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true
    });
  };

  const styles = {
    rightSocials: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '3rem'
    }
  }

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <>
      {isMobile && (
        <>
          <Button onClick={() => setOpenDrawer(true)}>
            <MenuIcon 
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ position: 'fixed', left: '25px'}}/>
          </Button>
          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {
                width: '40%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                padding: '1.5rem'
              },
            }}
          >
            <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0'}}>
              <img src={Logo} alt="Logo" style={{width: '120px', height: 'auto' }} />
              <Divider variant='center' color='#ffffff'/>
              {location === '/' ? (
                <>
                  <li>
                    {" "}
                    <Button color="white">
                      <ScrollLink to="home" spy={true} smooth={true} offset={-75} duration={500}>
                        Home
                      </ScrollLink>
                    </Button>
                  </li>
                  <li>
                    <Button color="white">
                      <ScrollLink to="about" spy={true} smooth={true} offset={-75} duration={500}>
                        About
                      </ScrollLink>
                    </Button>
                  </li>
                  <li>
                    <Button color="white">
                      <ScrollLink to="projects" spy={true} smooth={true} offset={-75} duration={500}>
                        Projects
                      </ScrollLink>
                    </Button>
                  </li>
                  <li>
                    <Button color="white">
                      <RouterLink to="/Contact" style={{textDecoration: 'none', color: 'white'}}>Contact</RouterLink>
                    </Button>
                  </li>
                  <li>
                    <RightSocial styles={styles.rightSocials} placement={'right'} color={'secondary'} />
                  </li>
                </>
              ) : (
                <>
                  <li>
                    {" "}
                    <Button color="white" onClick={() => goToPageAndScroll("home")}>Home</Button>
                  </li>
                  <li>
                    <Button color="white" onClick={() => goToPageAndScroll("about")}>About</Button>
                  </li>
                  <li>
                    <Button color="white" onClick={() => goToPageAndScroll("projects")}>Projects</Button>
                  </li>
                  <li>
                    <Button color="white">
                      <RouterLink to="/Contact" style={{textDecoration: 'none', color: 'white'}}>Contact</RouterLink>
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </Drawer>
        </>
      )}
      {!isMobile && (   
        <nav id="navigation">
          <ul  
            style={{
              display: 'flex',
              rotate: '-90deg',
              transformOrigin: 'left',
              position: 'fixed',
              top: '36.5rem',
              marginLeft: '20px',
            }}
          >
            {location !== "Contact" ? (
              <>
                <li>
                  {" "}
                  <Button color="white">
                    <ScrollLink to="home" spy={true} smooth={true} offset={-75} duration={500}>
                      Home
                    </ScrollLink>
                  </Button>
                </li>
                <li>
                  <Button color="white">
                    <ScrollLink to="about" spy={true} smooth={true} offset={-75} duration={500}>
                      About
                    </ScrollLink>
                  </Button>
                </li>
                <li>
                  <Button color="white">
                    <ScrollLink to="projects" spy={true} smooth={true} offset={-75} duration={500}>
                      Projects
                    </ScrollLink>
                  </Button>
                </li>
                <li>
                  <Button color="white">
                    <RouterLink to="/Contact" style={{textDecoration: 'none', color: 'white'}}>Contact</RouterLink>
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <Button color="white" onClick={() => goToPageAndScroll("home")}>Home</Button>
                </li>
                <li>
                  <Button color="white" onClick={() => goToPageAndScroll("about")}>About</Button>
                </li>
                <li>
                  <Button color="white" onClick={() => goToPageAndScroll("projects")}>Projects</Button>
                </li>
                <li>
                  <Button color="white">
                    <RouterLink to="/Contact" style={{textDecoration: 'none', color: 'white'}}>Contact</RouterLink>
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
