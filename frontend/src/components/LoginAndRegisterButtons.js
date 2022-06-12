import { Link, useLocation } from 'react-router-dom';
import { HStack, Button } from '@chakra-ui/react';
import Deso from "deso-protocol";
import {login} from "../actions/auth";
import desoIdentity from "../libs/desoIdentity";
const deso = new Deso();


const LoginAndRegisterButtons = () => {
  const location = useLocation();
  return (
    <HStack>
      {/*<Button*/}
      {/*  as={Link}*/}
      {/*  to={{*/}
      {/*    pathname: '/login',*/}
      {/*    state: {*/}
      {/*      prevPathname: location.pathname,*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Login*/}
      {/*</Button>*/}
      {/*<Button*/}
      {/*  as={Link}*/}
      {/*  to={{*/}
      {/*    pathname: '/register',*/}
      {/*    state: {*/}
      {/*      prevPathname: location.pathname,*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Register*/}
      {/*</Button>*/}

      <Button onClick={() => {
        // Run DeSo login function using deso-protocol library
          window.open('https://identity.deso.org/log-in?accessLevelRequest='+4, null, 'toolbar=no, width=1440, height=1440, top=0, left=0')
          // this.loginResolve = resolve
          // Get value from its return, extract key and store in variable
        // Save key to local storage
        // localStorage.setItem("publicKey", key);


        console.log("test")
      }}>
        <img src="/DeSo_Logo.png" width="25px" height="25px" />
        Login with DeSo
      </Button>
    </HStack>
  );
};

export default LoginAndRegisterButtons;
