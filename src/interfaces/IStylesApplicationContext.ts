export interface IStylesApplicationContext {
  setColorMode: (value?: 'light' | 'dark') => void;
  toggleColorMode: () => void;
  colorMode: 'light' | 'dark';
}