import Image from 'next/image';
import styles from './page.module.css';
import React from 'react';
import loginSvg from 'assets/login.svg';
import logo from 'assets/netzwelt-logo.png';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function Login() {
  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };

  return (
    <main className={styles.main}>
      <Card className={styles.card}>
        <Image src={loginSvg} alt="Login" className={styles.loginSvg} />
        <Box className={`${styles.box} ${styles.loginbox}`}>
          <CardContent className={styles.content}>
            <div className={styles.logo}><Image src={logo} alt="logo" style={{ height:'30%', width:'30%'}}/></div>
            <Typography component="div" variant="h5" className={styles.center}>
              Welcome Back!
            </Typography>
            <Typography variant="subtitle1" component="div" className={styles.center}>
              Sign In
            </Typography>
            <Box className={styles.inputs}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Username" variant="standard" sx={{width:'100%'}}/>
            </Box>
            <Box className={styles.inputs}>
              <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField variant= "standard" type= "password" label="Password" sx={{width:'100%'}}/>
            </Box>
            <Box sx={{display:'block', pl:'20', pt:'20'}}>           
              <Box sx={{pt:'40px'}}><Button variant="outlined" className={styles.button}>Sign In</Button></Box>
            </Box>     
          </CardContent>
        </Box>
      </Card>
    </main>
  );
}

