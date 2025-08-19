import React, { createContext, useContext, useEffect, useState } from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  startYear: number;
  endYear: number;
  description: string[];
}

interface ResumeData {
  name: string;
  title: string;
  summary?: string;
  // Остальные поля оставим опциональными, чтобы не ломать типы
  skills?: any;
  experience?: ExperienceItem[];
  education?: any[];
  personalDetails?: any;
  languages?: string[];
}

interface ResumeContextType {
  data: ResumeData | null;
  error: string | null;
}

const ResumeContext = createContext<ResumeContextType>({
  data: null,
  error: null,
});

const GIST_URL =
  'https://gist.githubusercontent.com/kottuzik/5ead30ca8258833fcf96e46b80df093c/raw/evaResume';
// при желании можно закрепить конкретную ревизию, добавив хэш между raw/ и /evaResume

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ResumeData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(GIST_URL, {
      signal: ctrl.signal,
      headers: { Accept: 'application/json' },
      // cache: 'no-store', // если нужно игнорировать кэш в dev
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Ошибка загрузки резюме: ${res.status}`);
        return res.json();
      })
      .then(setData)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      });

    return () => ctrl.abort();
  }, []);

  return <ResumeContext.Provider value={{ data, error }}>{children}</ResumeContext.Provider>;
};

export const useResume = () => useContext(ResumeContext);
