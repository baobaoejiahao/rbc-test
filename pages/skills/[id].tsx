// pages/skills/[id].tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';

const SkillDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [skill, setSkill] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchSkill = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/skills/${id}`);
        
        if (!res.ok) {
          throw new Error('Skill not found');
        }
        
        const data = await res.json();
        setSkill(data.data);
      } catch (error) {
        console.error('Error fetching skill:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkill();
  }, [id]);

  if (isLoading) {
    return (
      <Layout title="Loading... | SkillSync">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rbc-blue"></div>
        </div>
      </Layout>
    );
  }

  if (!skill) {
    return (
      <Layout title="Skill Not Found | SkillSync">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Skill Not Found</h1>
          <p className="text-gray-600 mb-6">The skill you're looking for doesn't exist or has been removed.</p>
          <Link href="/skills">
            <button className="btn-primary">Return to Skills Directory</button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${skill.name} | SkillSync`}>
      <div className="mb-4">
        <Link href="/skills">
          <button className="text-rbc-blue hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Skills Directory
          </button>
        </Link>
      </div>

      <Card>
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-rbc-blue mb-2">{skill.name}</h1>
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            {skill.category}
          </span>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{skill.description}</p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-4">Recommended Resources</h2>
          <p className="text-gray-600">
            No resources available yet. Resources for this skill will be added soon.
          </p>
        </div>
      </Card>
    </Layout>
  );
};

export default SkillDetail;