import React, { PropsWithChildren, createContext } from "react";
import { IStylesApplicationContext } from "@interfaces/IStylesApplicationContext";
import { ChakraProvider, ColorModeScript, ThemeConfig, extendTheme, useColorMode } from "@chakra-ui/react";

export const StylesApplicationContext = createContext({} as IStylesApplicationContext);

export const StylesApplicationProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

  const configTheme : ThemeConfig = {
    initialColorMode: colorMode,
    useSystemColorMode: false,

  };

  const themeApplication = extendTheme({
    configTheme,
    colors: {
      primary: {
        500: '#FF6347',
      },
      secondary: {
        500: '#6B46C1',
      },
    },
    fonts: {
      body: 'Roboto, sans-serif',
      heading: 'Montserrat, sans-serif',
    }
  });

  return(
    <StylesApplicationContext.Provider
      value={{
        colorMode,
        setColorMode,
        toggleColorMode
      }}
    >
      <ChakraProvider
        theme={themeApplication}
      >
        <ColorModeScript initialColorMode={colorMode} />
        {children}
      </ChakraProvider>
    </StylesApplicationContext.Provider>
  )
}