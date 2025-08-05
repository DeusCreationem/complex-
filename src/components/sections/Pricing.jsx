export default function Pricing() {
  const plans = [
    {
      name: "Старт",
      price: "990₽",
      period: "в месяц",
      features: [
        "Мониторинг 100 товаров",
        "Уведомления о штрафах",
        "Поддержка по email"
      ],
      cta: "Начать пробный период"
    },
    {
      name: "Профи",
      price: "4 990₽",
      period: "в месяц",
      features: [
        "Мониторинг 1000 товаров",
        "AI-оптимизация цен",
        "Приоритетная поддержка",
        "Аналитика конкурентов"
      ],
      cta: "Подключить",
      popular: true
    }
  ]

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Тарифные планы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border rounded-xl p-6 ${plan.popular ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Популярный
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-lg font-medium ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}