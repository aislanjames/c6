// src/app/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link href="#"><Avatar alt="Logotipo C6 Bank" src="#" ></Avatar></Link>
        <Link href="#">Início</Link>
        <Link href="#">Produtos</Link>
        <Link href="#">Seu Bolso</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
