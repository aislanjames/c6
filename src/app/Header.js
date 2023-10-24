// src/app/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant='h6'><Link href="#" >C6 Bank</Link></Typography>
        <Link href="#">Início</Link>
        <Link href="#">Produtos</Link>
        <Link href="#">Seu Bolso</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
