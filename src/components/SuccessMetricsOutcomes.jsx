import React from 'react';

const SuccessMetricsOutcomes = () => {
  const sections = [
    {
      id: 1,
      title: "Adoption & Integration of the Codified Culture Model",
      items: [
        "360 feedback assessment for all employees",
        "Performance evaluations and self-assessment tools (for leaders, managers, team members)",
        "New management training",
        "Annual review conversations"
      ],
      metric: "100% System Integration"
    },
    {
      id: 2,
      title: "Behavioral Rollout",
      items: [
        "5+ organizational rituals anchored in leadership behaviors (retreat sessions, all-staff meetings, weekly behavior launches, manager training cohorts, OKR setting)",
        "Ongoing monthly deep-dives into behaviors led by leadership team"
      ],
      metric: "5+ Culture rituals activated"
    },
    {
      id: 4,
      title: "Early Cultural Shifts",
      items: [
        'Clear adoption of leadership model language across functions (\'Passion for our Mission\', \'Straight Talk,\', \'Laser Focus,\' etc.)',
        'Increased employee engagement and understanding of mission and values via 360 Assessment and Leadership Storytelling sessions'
      ],
      metric: "92% Uptake in Leadership Language"
    },
  ];

  return (
    <div className="bg-white py-10 lg:py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl text-teal-600 mb-2 text-center">
            Success Metrics & Tangible Outcomes
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.id} className="space-y-6">
              {/* Section Header */}
              <div className="mb-6">
                <span className="text-red-700">
                  {section.id}. {section.title}
                </span>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3">
                {section.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1150px] mx-auto">
          <div className="bg-teal-700 p-2 rounded-full text-center">
            100% System Integration
          </div>
          <div className="bg-teal-700 p-2 rounded-full text-center">
            5+ Culture rituals activated
          </div>
          <div className="bg-teal-700 p-2 rounded-full text-center">
            92% Uptake in Leadership Language
          </div>
          <div className="bg-teal-700 p-2 rounded-full text-center">
            Culture shifts within 90 days
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMetricsOutcomes;