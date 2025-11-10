import React, { useState } from 'react';
import './App.css';
import TechnologyCard from './components/TechnologyCard';
import ProgressHeader from './components/ProgressHeader';

function App() {
  const [technologies, setTechnologies] = useState([
    { 
      id: 1, 
      title: 'React Components', 
      description: 'Изучение базовых компонентов и их жизненного цикла', 
      status: 'completed' 
    },
    { 
      id: 2, 
      title: 'JSX Syntax', 
      description: 'Освоение синтаксиса JSX и его особенностей', 
      status: 'in-progress' 
    },
    { 
      id: 3, 
      title: 'State Management', 
      description: 'Работа с состоянием компонентов и управление данными', 
      status: 'not-started' 
    },
    { 
      id: 4, 
      title: 'React Hooks', 
      description: 'Использование хуков для функциональных компонентов', 
      status: 'not-started' 
    },
    { 
      id: 5, 
      title: 'Routing', 
      description: 'Настройка маршрутизации в React приложениях', 
      status: 'in-progress' 
    }
  ]);

  const updateTechnologyStatus = (techId, newStatus) => {
    setTechnologies(prevTech => 
      prevTech.map(tech => 
        tech.id === techId ? { ...tech, status: newStatus } : tech
      )
    );
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="glow-text">Трекер Изучения Технологий</h1>
        <p className="subtitle">Отслеживайте ваш прогресс в освоении новых технологий</p>
      </header>
      
      <ProgressHeader technologies={technologies} />
      
      <main className="technologies-container">
        <div className="technologies-grid">
          {technologies.map(tech => (
            <TechnologyCard
              key={tech.id}
              id={tech.id}
              title={tech.title}
              description={tech.description}
              status={tech.status}
              onStatusChange={updateTechnologyStatus}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;