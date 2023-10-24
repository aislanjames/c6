import { Container, Typography, Link, Grid, Item } from '@mui/material';
import * as React from 'react';
import Header from './Header';

export default function Home() {
  return (
    <Container>
      <Header />
      <div>
        {/*  Data do post */}
        <Grid container spacing={2}>
          {/* Lado Esquerdo - Títulos e Link */}
          <Grid item xs={6}>
            <div>
              <Typography variant="h1">Podcast Macro Review | Se o mundo não reduzir a dívida…</Typography>
              <Typography variant="h2">Os impactos econômicos podem ser gigantes, explicam economistas do C6 Bank. Entenda a questão do endividamento global</Typography>
              <Link href="#">Continuar lendo</Link>
            </div>
          </Grid>

          {/* Lado Direito - Imagem */}
          <Grid item xs={6}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="https://www.c6bank.com.br/blog/_next/image?url=https%3A%2F%2Fcms-assets-p.c6bank.com.br%2Fuploads%2Fpodcast-macro-review-ep-81.png&w=1080&q=70" alt='Episódio do Podcast' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
