import React from 'react';
//import { motion } from 'framer-motion';//
import { FaExclamationTriangle, FaMoneyBillWave, FaClock } from 'react-icons/fa';

const Problem = () => {
  const problems = [
    {
      icon: <FaExclamationTriangle className="text-3xl text-yellow-500" />,
      title: "Неожиданные штрафы",
      description: "До 500 000₽ в месяц за просрочки, пересорт и ошибки в карточках"
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-500" />,
      title: "Потеря прибыли",
      description: "Неконкурентные цены из-за ручного мониторинга рынка"
    },
    {
      icon: <FaClock className="text-3xl text-blue-500" />,
      title: "Потеря времени",
      description: "4+ часа в день на рутинные операции вместо развития бизнеса"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Знакомые проблемы?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждый второй продавец на маркетплейсах теряет деньги из-за этих ошибок
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary to-indigo-700 rounded-xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">92% продавцов</h3>
              <p>получали неожиданные штрафы за последние 3 месяца</p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-indigo-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Узнать свой риск
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;