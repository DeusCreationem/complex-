import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import axios from 'axios'; // Добавлено для отправки данных

const CTA = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid },
    reset
  } = useForm({ mode: 'onChange' }); // Валидация при изменении
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки
  const [submitError, setSubmitError] = useState(null); // Ошибка отправки

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitError(null);
    
    try {
      // Отправка данных на сервер
      await axios.post('/api/submit-application', data);
      
      // Сброс формы и показ сообщения об успехе
      reset();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Ошибка при отправке заявки:', error);
      setSubmitError('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white" id="cta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Начните экономить уже сегодня
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Первые 100 участников получат пожизненную скидку 20%
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-800 rounded-xl p-8 shadow-xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">Заявка принята!</h3>
                <p>Мы свяжемся с вами в течение 15 минут для настройки доступа</p>
                
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => setIsSubmitted(false)}
                >
                  Отправить ещё одну заявку
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register('name', { 
                        required: 'Обязательное поле',
                        minLength: {
                          value: 2,
                          message: 'Минимум 2 символа'
                        }
                      })}
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1 text-left">{errors.name.message}</p>}
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
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1 text-left">{errors.phone.message}</p>}
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
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1 text-left">{errors.email.message}</p>}
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    {...register('agreement', { required: 'Необходимо согласие' })}
                    id="agreement"
                    className="mt-1 mr-2 h-5 w-5 text-primary rounded focus:ring-primary"
                  />
                  <label htmlFor="agreement" className="text-gray-300 text-left block">
                    Согласен с обработкой персональных данных в соответствии с 
                    <a href="/privacy" className="text-primary hover:underline ml-1">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
                {errors.agreement && <p className="text-red-400 text-sm text-left">{errors.agreement.message}</p>}
                
                {/* Показать ошибку отправки */}
                {submitError && (
                  <div className="text-red-400 py-2 text-sm">
                    {submitError}
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full mt-4 shadow-lg transform hover:scale-[1.02] transition-transform"
                  disabled={isLoading || !isValid}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </div>
                  ) : (
                    "Забронировать за 0₽"
                  )}
                </Button>
              </form>
            )}
            
            <div className="mt-6 text-gray-400 text-sm">
              <p>Предложение ограничено для первых 100 участников</p>
              <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full" 
                  style={{ width: '75%' }}
                ></div>
              </div>
              <p className="mt-2">Осталось 25 мест</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;