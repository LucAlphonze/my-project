import React from 'react';

// Interfaz para definir la estructura de las métricas/badges
interface MetricCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Componente secundario reutilizable para las tarjetas de métricas
const MetricCard: React.FC<MetricCardProps> = ({ title, description, icon }) => (
  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-4 text-white shadow-xl">
    <div className="p-3.5 rounded-lg bg-red-600/20 text-red-500 border border-red-500/20 shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  </div>
);

export default function HeroVideo(): React.JSX.Element {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Video de Fondo con Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 opacity-40"
        >
          <source src="/videos/trucks-hero.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        {/* Degradado para mejor contraste del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent" />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Texto y Botones (Columna Izquierda) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-600/20 text-red-400 border border-red-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Líderes en Logística de Combustibles
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Soluciones de Transporte y Logística Nacional
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Abastecimiento seguro y eficiente de combustibles livianos a granel y cargas generales en todo el territorio argentino[cite: 1].
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contacto"
                className="px-6 py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
              >
                Cotizar Servicio
              </a>
              <a
                href="#nosotros"
                className="px-6 py-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 font-semibold text-base backdrop-blur-sm transition-all duration-200"
              >
                Conocer Trayectoria
              </a>
            </div>
          </div>

          {/* Tarjetas de Métricas (Columna Derecha / Badges) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Card 1: Trayectoria */}
            <MetricCard
              title="+50 Años"
              description="Trayectoria y experiencia desde 1974"
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 2 2 0 002-2V7a2 2 2 2 0 00-2-2H5a2 2 2 2 0 00-2 2v12a2 2 2 2 0 002 2z" />
                </svg>
              }
            />

            {/* Card 2: Flota */}
            <MetricCard
              title="+50 Unidades"
              description="Flota de camiones propia y coordinada"
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              }
            />

            {/* Card 3: Clientes Clave */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-white shadow-xl sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Clientes de Confianza
              </p>
              <div className="flex items-center justify-between gap-4 font-bold text-slate-300">
                <span className="text-lg">YPF</span>
                <span className="text-slate-600">•</span>
                <span className="text-lg">DELTA PATAGONIA</span>
                <span className="text-slate-600">•</span>
                <span className="text-lg">HOLCIM</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}