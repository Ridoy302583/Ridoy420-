import React from 'react';

const skills = [
  { name: 'Strategic Leadership', level: 95 },
  { name: 'Business Development', level: 90 },
  { name: 'Technology Innovation', level: 92 },
  { name: 'Team Management', level: 88 },
  { name: 'Public Speaking', level: 85 },
  { name: 'Financial Planning', level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative light-beam">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right mt-2 text-gray-400">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
