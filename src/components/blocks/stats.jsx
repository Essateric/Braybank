import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Users, Building2, Home } from 'lucide-react';

const stats = [
  { number: '62', label: 'Properties', icon: Building2 },
  { number: '48', label: 'Apartments', icon: Home },
  { number: '14', label: 'Townhouses', icon: Building2 },
  { number: '5', label: 'Board Directors', icon: Users }
];

function StatsSection() {
  const statAnimations = stats.map((_, index) =>
    useSpring({
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, y: 0 },
      delay: index * 200,
    })
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const isBoardCard = stat.label === 'Board Directors';
            const cardContent = (
              <animated.div style={statAnimations[index]} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-light text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              </animated.div>
            );

            return (
              <div key={index}>
                {isBoardCard ? <a href="#directors">{cardContent}</a> : cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;