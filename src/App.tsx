import React, { useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import PageSlider from './components/PageSlider';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <PageSlider />
  );
}

export default App;