import { useState } from 'react';
import { AvatarCard } from './components/AvatarCard';
import avImg from './assets/profile-photo-6.png';
import { theme } from './muiTheme';
import { ThemeProvider } from '@mui/material';

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AvatarCard
          avatar={avImg}
          title={'abc'}
          subtitle={'abc'}
          description={
            "Love using the app. There's a learning curve. But totally worth it."
          }
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
