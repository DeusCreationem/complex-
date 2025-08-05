import React from 'react';
//import { motion } from 'framer-motion';//
import Button from '../ui/Button';

const Hero = () => (
  <div className="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/5"></div>
    
    <div className="container mx-auto px-4 py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
          Запуск предзаказов!
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Перестаньте платить <span className="text-yellow-400">штрафы Wildberries</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-2xl">
          Предупредим за 48 часов. Сэкономим до 500 000₽ в месяц.
          Автоматизация цен, остатков и рекламы в одном сервисе.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="shadow-lg">
            Попробовать за 0₽
          </Button>
          <Button variant="secondary" size="lg">
            Смотреть демо
          </Button>
        </div>
        
        <div className="mt-12 flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>Работает с WB и Ozon</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>Безопасная интеграция через API</span>
          </div>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-indigo-500/20 to-transparent"></div>
  </div>
);

export default Hero;