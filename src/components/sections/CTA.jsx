import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
//import { motion } from 'framer-motion';//

const CTA = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // Здесь будет отправка данных на сервер
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Начните экономить уже сегодня
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Первые 100 участников получат пожизненную скидку 20%
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-xl p-8 shadow-xl"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">Заявка принята!</h3>
                <p>Мы свяжемся с вами в течение 15 минут для настройки доступа</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register('name', { required: 'Обязательное поле' })}
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <input
                      {...register('phone', { 
                        required: 'Обязательное поле',
                        pattern: {
                          value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                          message: 'Некорректный номер телефона'
                        }
                      })}
                      placeholder="Телефон"
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div>
                  <input
                    {...register('email', { 
                      required: 'Обязательное поле',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Некорректный email'
                      }
                    })}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('agreement', { required: 'Необходимо согласие' })}
                    id="agreement"
                    className="mr-2 h-5 w-5 text-primary rounded focus:ring-primary"
                  />
                  <label htmlFor="agreement" className="text-gray-300">
                    Согласен с обработкой персональных данных
                  </label>
                </div>
                {errors.agreement && <p className="text-red-400 text-sm">{errors.agreement.message}</p>}
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full mt-4 shadow-lg transform hover:scale-[1.02] transition-transform"
                >
                  Забронировать за 0₽
                </Button>
              </form>
            )}
            
            <div className="mt-6 text-gray-400 text-sm">
              <p>Предложение ограничено. После заполнения формы с вами свяжется наш специалист</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;