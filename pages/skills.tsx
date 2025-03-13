// pages/skills.tsx
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import SkillList from '@/components/skills/SkillList';

const SkillsPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/skills');
        const data = await response.json();
        
        if (data.success) {
          setSkills(data.data);
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSkills();
  }, []);

  return (
    <Layout title="Skills Directory | SkillSync">
      <h1 className="text-3xl font-bold mb-6">Skills Directory</h1>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rbc-blue"></div>
        </div>
      ) : (
        <SkillList skills={skills} />
      )}
    </Layout>
  );
};

export default SkillsPage;