// pages/index.tsx
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import SkillCard from '@/components/skills/SkillCard';

const Dashboard: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch skills
        const skillsRes = await fetch('/api/skills');
        const skillsData = await skillsRes.json();
        
        if (skillsData.success) {
          setSkills(skillsData.data);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Group skills by category
  const skillsByCategory = skills.reduce((groups: any, skill) => {
    const category = skill.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(skill);
    return groups;
  }, {});

  if (isLoading) {
    return (
      <Layout title="Dashboard | SkillSync">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rbc-blue"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Dashboard | SkillSync">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Summary Card */}
      <Card className="mb-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-rbc-blue mb-2">Welcome to SkillSync</h2>
          <p className="text-gray-600">
            A simple platform to track organizational skills and identify skill gaps
          </p>
        </div>
      </Card>
      
      {/* Skills Summary */}
      <h2 className="text-2xl font-bold text-rbc-blue mb-4">Skills Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card title="Total Skills">
          <div className="text-center">
            <div className="text-4xl font-bold text-rbc-blue">
              {skills.length}
            </div>
            <div className="text-gray-500 mt-1">Skills Available</div>
          </div>
        </Card>
        
        <Card title="Skill Categories">
          <div className="text-center">
            <div className="text-4xl font-bold text-rbc-blue">
              {Object.keys(skillsByCategory).length}
            </div>
            <div className="text-gray-500 mt-1">Categories</div>
          </div>
        </Card>
      </div>
      
      {/* Featured Skills */}
      <h2 className="text-2xl font-bold text-rbc-blue mb-4">Featured Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.slice(0, 6).map((skill) => (
          <SkillCard
            key={skill._id}
            id={skill._id}
            name={skill.name}
            category={skill.category}
            description={skill.description}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;