import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import Home from "./Home";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for 1 second to simulate loading
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // After the 1-second delay, hide the splash screen
        setAppReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!isAppReady) {
    return null; // Keep the app in a loading state until the splash screen is hidden
  }

  // Once app is ready, render the Home screen
  return <Home />;
}
