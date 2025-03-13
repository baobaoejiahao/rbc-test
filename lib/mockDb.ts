// lib/mockDb.ts
import { v4 as uuidv4 } from 'uuid';
import sampleSkills from '../data/skills.json';

/**
 * Mock database store to hold data in memory
 */
interface Skill {
  _id: string;
  name: string;
  category: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

// In-memory store
let skills: Skill[] = [];

// Initialize with sample data
export const initializeMockDb = () => {
  if (skills.length === 0) {
    skills = sampleSkills.map(skill => ({
      _id: uuidv4(),
      ...skill,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  }
  return skills;
};

// Get all skills
export const getAllSkills = async () => {
  // Ensure DB is initialized
  if (skills.length === 0) {
    initializeMockDb();
  }
  
  // Sort by name (similar to MongoDB sort)
  return [...skills].sort((a, b) => a.name.localeCompare(b.name));
};

// Get skill by ID
export const getSkillById = async (id: string) => {
  return skills.find(skill => skill._id === id) || null;
};

// Create a new skill
export const createSkill = async (skillData: Omit<Skill, '_id' | 'createdAt' | 'updatedAt'>) => {
  const newSkill: Skill = {
    _id: uuidv4(),
    ...skillData,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  skills.push(newSkill);
  return newSkill;
};

// Update a skill
export const updateSkill = async (id: string, skillData: Partial<Omit<Skill, '_id' | 'createdAt' | 'updatedAt'>>) => {
  const index = skills.findIndex(skill => skill._id === id);
  
  if (index === -1) {
    return null;
  }
  
  skills[index] = {
    ...skills[index],
    ...skillData,
    updatedAt: new Date()
  };
  
  return skills[index];
};

// Delete a skill
export const deleteSkill = async (id: string) => {
  const index = skills.findIndex(skill => skill._id === id);
  
  if (index === -1) {
    return false;
  }
  
  skills.splice(index, 1);
  return true;
};

// Clear all skills (for testing)
export const clearSkills = () => {
  skills = [];
};