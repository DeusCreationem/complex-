export default function Testimonials() {
  const testimonials = [
    {
      name: "Иван Петров",
      company: "ТОП-500 WB",
      text: "Место для вашего будущего отзыва",
      avatar: "👨‍💼"
    },
    {
      name: "Елена Смирнова",
      company: "Wb Seller",
      text: "Место для вашего будущего отзыва",
      avatar: "👩‍💻"
    }
  ]

  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}