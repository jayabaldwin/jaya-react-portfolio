// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';

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

// const ContactForm = () => {
//   const form = useRef();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_zhrs8kc', 'template_27zq3kh', form.current, {
//         publicKey: 'GXLJsHQlL6ZMfdqkl',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   const handleChange = input => event => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };;

//   return (
//     <Box>
//     <CssBaseline />
//       <Typography variant="h4" align="center" component="h1" sx={{marginTop: '3rem'}} gutterBottom>
//         {'Contact Form'.toUpperCase()}
//       </Typography>
//       <Grid container direction="column" justify="center" alignItems="center">
//         <Grid item>
//           <form
//             id="contact-form"
//             ref={form}
//             style={styles.contactForm}
//             onSubmit={sendEmail}
//           >
//             <Grid item>
//               <TextField
//                 fullWidth
//                 required
//                 id="name"
//                 label="Name"
//                 name="user_name"
//                 onChange={handleChange("userName")}
//                 margin="normal"
//                 color='primary'
//               />
//             </Grid>
//             <Grid item>
//               <TextField
//                 fullWidth
//                 required
//                 id="email"
//                 label="Email"
//                 name="user_email"
//                 onChange={handleChange("email")}
//                 margin="normal"
//               />
//             </Grid>
//             <Grid item>
//               <TextField
//                 fullWidth
//                 required
//                 id="message"
//                 label="Message"
//                 name="message"
//                 // onChange={handleChange("message")}
//                 margin="normal"
//                 multiline
//                 rowsMax="4"
//               />
//             </Grid>
//             <Grid container direction="row" spacing={2} style={{ marginTop: 20 }}>
//               <Grid item>
//                 <Button
//                   type="reset"
//                   variant="contained"
//                   color="default"
//                 >
//                   RESET
//                 </Button>
//               </Grid>
//               <Grid item>
//                 <Button
//                   type="submit"
//                   value="send"
//                   variant="contained"
//                   color="primary"
//                 >
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ContactForm;
