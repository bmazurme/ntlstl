import {createContext} from 'react';
import {Theme} from '@gravity-ui/uikit';
import {LIGHT} from '@/components/app/constants';

export const ThemeContext = createContext<{theme: Theme; setTheme: (theme: Theme) => void}>({
  theme: LIGHT,
  setTheme: () => {},
});
