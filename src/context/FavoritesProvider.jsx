import { useEffect, useState } from 'react';
import { FavoritesContext } from './FavoritesContext.js';
import { courses } from '../data/courses.js';

const STORAGE_KEY = 'koolituste-kataloog:lemmikud';

function readStoredFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!Array.isArray(stored)) {
      return [];
    }

    // Jätame alles ainult olemasolevad kursused, et päises kuvatav arv oleks õige.
    const courseIds = courses.map((course) => course.id);
    return [...new Set(stored)].filter((id) => courseIds.includes(id));
  } catch {
    return [];
  }
}

function FavoritesProvider({ children }) {
  // Funktsioon käivitub ainult esimesel renderdamisel.
  const [favorites, setFavorites] = useState(readStoredFavorites);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // Kui salvestamine pole võimalik, töötavad lemmikud edasi kuni lehe sulgemiseni.
    }
  }, [favorites]);

  function toggleFavorite(courseId) {
    setFavorites((current) =>
      current.includes(courseId)
        ? current.filter((id) => id !== courseId)
        : [...current, courseId],
    );
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
