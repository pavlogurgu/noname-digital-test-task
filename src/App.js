
import './App.css';
// import React, { useState } from 'react';
import React  from 'react';

import {

  Routes,
  Route,

} from "react-router-dom";
// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

import { LoginPassword } from './auth/password/LoginPassword';
import { SignUpPassword } from './auth/password/SignUpPassword';

import { Home } from './Home';


// const ExampleToast = ({ children }) => {
//   const [show, toggleShow] = useState(true);

//   return (
//     <>
//       {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
//       <Toast show={show} onClose={() => toggleShow(false)}>
//         <Toast.Header>
//           <strong className="mr-auto">React-Bootstrap</strong>
//         </Toast.Header>
//         <Toast.Body>{children}</Toast.Body>
//       </Toast>
//     </>
//   );
// };

const App = () => (
  <>




        <Routes>
        <Route path="/" element={<LoginPassword />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/login" component={<LoginPassword />} /> */}
          <Route path="/login" element={<LoginPassword />} />

          <Route path="/sign-up" element={<SignUpPassword />} />
        </Routes>



    {/* <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
      <LoginPassword />

      <SignInGoogle />
    </Container> */}
  </>
);


export default App;
