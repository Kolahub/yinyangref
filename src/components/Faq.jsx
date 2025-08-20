import React, { useState } from 'react';

const Faq = () => {
  const [expandedItem, setExpandedItem] = useState('in-necessitate');

  const accordionItems = [
    {
      id: 'in-necessitate',
      title: 'in necessitate',
      content: 'Cum privata assecuratione medica, es haesus per annum. Non potes addere autremovere tegmen. Punica est variabilis subscriptio et potes addere aut removere servitia quandocumque vis.'
    },
    {
      id: 'sapiens-praedictiva',
      title: 'Sapiens praedictiva sanitas',
      content: 'Content for Sapiens praedictiva sanitas would go here.'
    },
    {
      id: 'compara-tecum',
      title: 'Compara tecum cum hominibus tibi similibus',
      content: 'Content for Compara tecum cum hominibus tibi similibus would go here.'
    },
    {
      id: 'praeventio-prima',
      title: 'Praeventio prima',
      content: 'Content for Praeventio prima would go here.'
    }
  ];

  const toggleAccordion = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="bg-white lg:py-16 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-meduim text-teal-600 mb-3">
            Lorem-lorem sapiens sanitas
          </h1>
          <p className="text-gray-700 mx-auto leading-relaxed w-full max-w-[500px]">
            Five strata of leniter integrata sapiens sanitas that curat de te omni tempore, non solum cum iam scis te aegrotum esse.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-4 items-start">
          {/* Left Column - Accordion */}
          <div className="space-y-4">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className="bg-amber-50 border-2 border-amber-900 rounded-2xl overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-amber-100 transition-colors duration-200"
                >
                  <span className="text-amber-900 text-lg font-medium">
                    {item.title}
                  </span>
                  <span className="text-amber-900 text-2xl font-light ml-4 flex-shrink-0">
                    {expandedItem === item.id ? '−' : '+'}
                  </span>
                </button>

                {/* Accordion Content */}
                {expandedItem === item.id && (
                  <div className="px-6 pb-6 bg-white">
                    <div className="border-t border-amber-200 pt-4">
                      <p className="text-amber-900 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-start">
            <div className="h-[360px] w-full max-w-[500px] border-2 border-b-10 border-e-yellow-700 rounded-2xl">
                <img src="/faq-img.png" alt="" className="w-full h-full rounded-t-2xl rounded-b-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;