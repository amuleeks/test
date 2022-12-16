import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';


const theme = createTheme();

export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = { 
    email: data.get('email'),
    password: data.get('password'),
    fname:data.get('fname'),
    lname:data.get('lname'),
    address:data.get('address'),
    provinceTerri:data.get('provinceTerri'),
    city:data.get('city')
  }
  console.log(payload);

  try{
    await axios.post('http://localhost:8080/user/register', payload)
    .then(response => {
      console.log("TEST " + response.status)
      alert("Successfully registered");
      //  this.props.history.push('/test'); no idea why not work??
    })


}catch(err){
 
  alert("You already have an account! Please go login");
}

    console.log("PAYLOAD"+{
      email: data.get('email'),
      password: data.get('password'),
      fname:data.get('fname'),
      lname:data.get('lname'),
      address:data.get('address'),
      provinceTerri:data.get('provinceTerri'),
      city:data.get('city')
      
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    
          <Typography component="h1" variant="h5">
            Create an account
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="fname"
                  required
                  fullWidth
                  id="firstfnameName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="provinceTerri"
                  label="Province"
                  name="provinceTerri"
                  autoComplete="provinceTerri"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
         
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
        
            </Grid>
          </Box>
        </Box>
      </Container>
      <div>
                <Link href="/login" variant="inherit">
                  Already have an account? Sign in
                </Link>
                </div>
    </ThemeProvider>
  );
}