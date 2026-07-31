import { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      {/* Sidebar estático (US #3) */}
      <aside className="sidebar">
        <h2>Mi App</h2>
      </aside>

      {/* Main Area (US #3) */}
      <div className="main-area">
        {/* Header fijo (US #4) sin el input duplicado */}
        <header className="header">
           <h1 style={{ margin: 0, fontSize: '1.25rem' }}>Panel de Administración</h1>
        </header>

        {/* Contenedor de contenido con overflow (US #4) */}
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;