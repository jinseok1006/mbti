import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="h1" variant="h6">
          React로 빠르게만드는 성격테스트
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
