import {
  Container,
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  Box,
} from '@mui/material';

import Header from '@/components/header';
import Footer from '@/components/footer';

import Mbti from '@/pages/mbti';

const theme = createTheme({
  typography: {
    fontFamily: 'noto sans kr',
  },
});

export default function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            fontFamily: 'noto sans kr',
          },
        }}
      />
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="sm"
          sx={{ minHeight: '100vh', position: 'relative' }}
          disableGutters
        >
          <Header />
          <Mbti />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}
