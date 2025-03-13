// components/skills/SkillList.tsx
import React, { useState } from 'react';
import SkillCard from './SkillCard';

interface Skill {
  _id: string;
  name: string;
  category: string;
  description: string;
}

interface SkillListProps {
  skills: Skill[];
  title?: string;
}

const SkillList: React.FC<SkillListProps> = ({
  skills,
  title = 'Skills Directory',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(skills.map(skill => skill.category))).sort();
  
  // Filter skills based on search term and selected category
  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-rbc-blue mb-4">{title}</h2>
      
      <div className="mb-6 flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Search skills..."
            className="w-full py-2 px-4 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rbc-blue"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="flex-1 flex flex-wrap gap-2">
          <button
            className={`text-sm py-1 px-3 rounded-full transition-colors ${
              !selectedCategory ? 'bg-rbc-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`text-sm py-1 px-3 rounded-full transition-colors ${
                selectedCategory === category ? 'bg-rbc-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {filteredSkills.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill._id}
              id={skill._id}
              name={skill.name}
              category={skill.category}
              description={skill.description}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-2">No skills found matching your criteria</p>
          <button
            className="text-rbc-blue hover:underline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory(null);
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillList;