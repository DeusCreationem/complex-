export default function Features() {
  const features = [
    {
      title: "Прогноз штрафов",
      description: "Предупреждаем за 48 часов до блокировок",
      icon: "🛡️"
    },
    {
      title: "Мониторинг цен",
      description: "Анализ 1000+ конкурентов в реальном времени",
      icon: "📉"
    },
    {
      title: "AI-оптимизация",
      description: "Автоматическая корректировка рекламных кампаний",
      icon: "🧠"
    }
  ]

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши возможности</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-indigo-300 transition-colors">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}