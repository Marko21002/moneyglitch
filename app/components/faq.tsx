const faqs = [
    {
      id: 1,
      question: "Is it free to become content creator on our platform?",
      answer:
        "Yes! you can start your online bussines with us completely for free but we will take our comission from your earnings",
    },
    {
        id: 2,
        question: "How much is our comission?",
        answer:
          "Including payment provider fee we will take 10-20% from your earnings",
      },
      {
        id: 3,
        question: "When does our platform launch?",
        answer:
          "Real soon!We are planing to launch in around 5-6 month,if you want to take part in our private betatest you can get it earlier,also dont forget to give us your email to get notification from us on launch :)",
      },
    // More questions...
  ]
  
  export default function Faq() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-cyan-800">Frequently asked questions</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  