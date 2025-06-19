// Header.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ribbon } from 'd3';

 
const Header = () => {
  const { theme, setTheme } = useTheme();
 const isDark = theme === 'dark';

 return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        padding: '10px 16px',
        backgroundColor: isDark ? '#444' : '#ddd',
        color: isDark ? '#fff' : '#000',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      {isDark ? '🌙 ' : '☀️ '}
    </button>
  );
};

export default Header;

const styles = {
    themeBtn:{
    position: 'absolute',    // position at a specific screen corner
    top: '20px',
    right: '20px',
    padding: '10px 16px',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 1000
  }
}
