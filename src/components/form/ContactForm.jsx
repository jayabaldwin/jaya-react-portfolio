import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

// Stop from changing color when prefilled text comes up
// Alter styles
// Confirm emails are sending out upon submit... change to be email sends
// Alert that it has been sent successfully

const styles = {
  contactForm: {
    marginTop: '1.5rem',
    width: '60vh'
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async event => {
    event.preventDefault();
    
    const { userName, email, message } = formData;
    
    try {
      const data = await postData('mailto:jayastarrbaldwin@gmail.com', { userName, email, message });
      console.log(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }

    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)
      });
      return await response.json();
    }

    document.getElementById('contact-form').reset();
    setFormData({ userName: "", email: "", message: "" });
  };

  const handleChange = input => event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" sx={{marginTop: '6rem'}} gutterBottom>
        {'Contact Form'.toUpperCase()}
      </Typography>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <form
            id="contact-form"
            style={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <Grid item>
              <TextField
                fullWidth
                required
                id="name"
                label="Name"
                name="userName"
                onChange={handleChange("userName")}
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="email"
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
                onChange={handleChange("message")}
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
    </div>
  );
};

export default ContactForm;
