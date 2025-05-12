import { ref } from 'vue';

export function useThemeStore() {
  const theme = ref('light'); 

  const setTheme = (newTheme) => {
    theme.value = newTheme;
    document.body.className = newTheme ; 
  };

  return { theme, setTheme };
}
