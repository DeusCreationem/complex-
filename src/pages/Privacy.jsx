// src/pages/Privacy.jsx
import React from 'react';

const PrivacyPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Политика конфиденциальности
                    </h1>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-2xl">
                    <div className="p-8">
                        <div className="flex items-start mb-6">
                            <div className="bg-indigo-100 p-3 rounded-lg mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Сбор информации</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Мы собираем информацию, которую вы предоставляете при заполнении форм на нашем сайте, включая имя, email, телефон и другие контактные данные. Данные собираются только с вашего явного согласия.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-2xl">
                    <div className="p-8">
                        <div className="flex items-start mb-6">
                            <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Использование информации</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Собранная информация используется исключительно для связи с вами, предоставления запрошенных услуг и улучшения качества нашего сервиса. Мы гарантируем, что не передаем ваши данные третьим лицам без вашего явного согласия.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-2xl">
                    <div className="p-8">
                        <div className="flex items-start mb-6">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Защита данных</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Мы используем современные методы шифрования (SSL/TLS) и строгие протоколы защиты данных для обеспечения максимальной безопасности вашей личной информации. Все данные хранятся на защищенных серверах с ограниченным доступом.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-2xl">
                    <div className="p-8">
                        <div className="flex items-start mb-6">
                            <div className="bg-amber-100 p-3 rounded-lg mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Cookies</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Наш сайт использует cookies для улучшения пользовательского опыта, анализа трафика и персонализации контента. Вы можете в любое время отключить cookies в настройках вашего браузера или использовать режим инкогнито.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-2xl">
                    <div className="p-8">
                        <div className="flex items-start mb-6">
                            <div className="bg-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Ваши права и контакты</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Вы имеете право запросить доступ к вашим персональным данным, их исправление или удаление в любой момент. Для этого или по любым другим вопросам, касающимся конфиденциальности, обращайтесь к нам:
                                </p>
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <p className="font-medium text-gray-800 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        complexbeta@yandex.ru
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6 text-center border border-indigo-100">
                    <p className="text-indigo-800 font-medium">
                        Последнее обновление: {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;