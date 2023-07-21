import Image from 'next/image';
import styles from './page.module.css';
import React from 'react';
import loginSvg from 'assets/login.svg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Login() {
  
  return (
    <main className={styles.main}>
      <Card className={styles.card}>
        <Image src={loginSvg} alt="Login" className={styles.loginSvg} />
        <Box className={`${styles.box} ${styles.loginbox}`}>
          <CardContent className={styles.content}>
            <Typography component="div" variant="h5" className={styles.center}>
              Welcome Back!
            </Typography>
            <Typography variant="subtitle1" component="div" className={styles.center}>
              Sign In
            </Typography>
            <Box sx={{display:'block'}}>
              <Box sx={{padding:'6px'}}><TextField id="standard-basic" label="Username" variant="standard" sx={{width:'100%'}}/></Box> 
              <Box sx={{padding:'6px'}}><TextField id="standard-basic" label="Password" variant="standard" sx={{width:'100%'}}/></Box>            
              <Box sx={{pt:'40px'}}><Button variant="outlined" className={styles.button}>Sign In</Button></Box>
            </Box>     
            {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="With sx" variant="standard" />
            </Box>        */}
          </CardContent>
        </Box>
      </Card>
    </main>
  );
}

