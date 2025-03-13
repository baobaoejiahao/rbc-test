// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/lib/mongodb';
// import Skill from '@/models/Skill';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { method } = req;

//   await dbConnect();

//   switch (method) {
//     case 'GET':
//       try {
//         const skills = await Skill.find({}).sort({ name: 1 }).lean();
//         res.status(200).json({ success: true, data: skills });
//       } catch (error) {
//         res.status(400).json({ success: false, error: (error as Error).message });
//       }
//       break;
    
//     case 'POST':
//       try {
//         const skill = await Skill.create(req.body);
//         res.status(201).json({ success: true, data: skill });
//       } catch (error) {
//         res.status(400).json({ success: false, error: (error as Error).message });
//       }
//       break;
    
//     default:
//       res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
//       break;
//   }
// }

// pages/api/skills.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getAllSkills, createSkill, initializeMockDb } from '@/lib/mockDb';

// Initialize mock DB on server start
initializeMockDb();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const skills = await getAllSkills();
        res.status(200).json({ success: true, data: skills });
      } catch (error) {
        res.status(400).json({ success: false, error: (error as Error).message });
      }
      break;
    
    case 'POST':
      try {
        const skill = await createSkill(req.body);
        res.status(201).json({ success: true, data: skill });
      } catch (error) {
        res.status(400).json({ success: false, error: (error as Error).message });
      }
      break;
    
    default:
      res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
      break;
  }
}