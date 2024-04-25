import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

const styles = {
  contactForm: {
    marginTop: '1.5rem',
    width: '60vh'
  },
  // contactFrame: {
  //   background: 'white',
  //   border: '#ffffff'
  // }
};

const ContactForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zhrs8kc', 'template_27zq3kh', form.current, {
        publicKey: 'GXLJsHQlL6ZMfdqkl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleChange = input => event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };;

  return (
    <Box>
    <CssBaseline />
      <Typography variant="h4" align="center" component="h1" sx={{marginTop: '3rem'}} gutterBottom>
        {'Contact Form'.toUpperCase()}
      </Typography>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <form
            id="contact-form"
            ref={form}
            style={styles.contactForm}
            onSubmit={sendEmail}
          >
            <Grid item>
              <TextField
                fullWidth
                required
                id="name"
                label="Name"
                name="user_name"
                onChange={handleChange("userName")}
                margin="normal"
                color='primary'
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="user_email"
                onChange={handleChange("email")}
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="message"
                label="Message"
                name="message"
                // onChange={handleChange("message")}
                margin="normal"
                multiline
                rowsMax="4"
              />
            </Grid>
            <Grid container direction="row" spacing={2} style={{ marginTop: 20 }}>
              <Grid item>
                <Button
                  type="reset"
                  variant="contained"
                  color="default"
                >
                  RESET
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  value="send"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;

// import React, { useState } from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';

// // Stop from changing color when prefilled text comes up
// // Alter styles
// // Confirm emails are sending out upon submit... change to be email sends
// // Alert that it has been sent successfully

// const styles = {
//   contactForm: {
//     marginTop: '1.5rem',
//     width: '60vh'
//   },
//   // contactFrame: {
//   //   background: 'white',
//   //   border: '#ffffff'
//   // }
// };

// const ContactForm = () => 

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

//   const handleSubmit = async event => {
//     event.preventDefault();
//     const { name, email, message } = formData;

//     emailjs.init({
//       publicKey: 'GXLJsHQlL6ZMfdqkl',
//     });

//     emailjs.sendForm('contact_service', 'contact_form', this)
//                     .then(() => {
//                         console.log('SUCCESS!');
//                     }, (error) => {
//                         console.log('FAILED...', error);
//                     });
    
//     // try {
//     //   const data = await postData('mailto:jayastarrbaldwin@gmail.com', { name, email, message });
//     //   console.log(JSON.stringify(data));
//     // } catch (error) {
//     //   console.error(error);
//     // }

//     // async function postData(url = '', data = {}) {
//     //   const response = await fetch(url, {
//     //     method: 'POST',
//     //     mode: 'no-cors',
//     //     cache: 'no-cache',
//     //     credentials: 'same-origin',
//     //     headers: {
//     //       'Content-Type': 'application/json'
//     //     },
//     //     redirect: 'follow',
//     //     referrer: 'no-referrer',
//     //     body: JSON.stringify(data)
//     //   });
//     //   return await response.json();
//     // }

//     document.getElementById('contact-form').reset();
//     setFormData({ name: "", email: "", message: "" });
//   };

  // const handleChange = input => event => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // return (
  //   <Box>
  //   <CssBaseline />
  //     <Typography variant="h4" align="center" component="h1" sx={{marginTop: '3rem'}} gutterBottom>
  //       {'Contact Form'.toUpperCase()}
  //     </Typography>
  //     <Grid container direction="column" justify="center" alignItems="center">
  //       <Grid item>
  //         <form
  //           id="contact-form"
  //           style={styles.contactForm}
  //           onSubmit={handleSubmit}
  //         >
  //           <Grid item>
  //             <TextField
  //               fullWidth
  //               required
  //               id="name"
  //               label="Name"
  //               name="userName"
  //               onChange={handleChange("userName")}
  //               margin="normal"
  //               color='primary'
  //             />
  //           </Grid>
  //           <Grid item>
  //             <TextField
  //               fullWidth
  //               required
  //               id="email"
  //               label="Email"
  //               name="email"
  //               onChange={handleChange("email")}
  //               margin="normal"
  //             />
  //           </Grid>
  //           <Grid item>
  //             <TextField
  //               fullWidth
  //               required
  //               id="message"
  //               label="Message"
  //               name="message"
  //               onChange={handleChange("message")}
  //               margin="normal"
  //               multiline
  //               rowsMax="4"
  //             />
  //           </Grid>
  //           <Grid container direction="row" spacing={2} style={{ marginTop: 20 }}>
  //             <Grid item>
  //               <Button
  //                 type="reset"
  //                 variant="contained"
  //                 color="default"
  //               >
  //                 RESET
  //               </Button>
  //             </Grid>
  //             <Grid item>
  //               <Button
  //                 type="submit"
  //                 variant="contained"
  //                 color="primary"
  //               >
  //                 Submit
  //               </Button>
  //             </Grid>
  //           </Grid>
  //         </form>
  //       </Grid>
  //     </Grid>
  //   </Box>
  // );
// }

// export default ContactForm;
