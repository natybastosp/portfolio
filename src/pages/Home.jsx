import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800">
          Bem-vindo ao meu Portfólio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Desenvolvedor criativo e apaixonado por tecnologia
        </p>
        <div className="pt-8">
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver Projetos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
