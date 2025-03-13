// components/skills/SkillCard.tsx
import React from 'react';
import Link from 'next/link';

interface SkillCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ id, name, category, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-lg mb-1 text-rbc-blue">{name}</h3>
      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mb-2">
        {category}
      </span>
      <p className="text-gray-600 mt-2 mb-4 line-clamp-2">{description}</p>
      <Link href={`/skills/${id}`}>
        <button className="text-rbc-blue hover:underline text-sm font-medium">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SkillCard;