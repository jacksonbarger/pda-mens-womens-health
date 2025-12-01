// Master file for all professor-specific exam prep content

import type { ProfessorContent } from './professorTypes';
import { burmeisterContent } from './burmeister';
import { breezeContent } from './breeze';
import { weldonContent } from './weldon';
import { virgaContent } from './virga';

export const professors: ProfessorContent[] = [
  burmeisterContent,
  breezeContent,
  weldonContent,
  virgaContent
];

export const getProfessorById = (id: string): ProfessorContent | undefined => {
  return professors.find(prof => prof.id === id);
};

export const getProfessorsBySpecialty = (specialty: string): ProfessorContent[] => {
  return professors.filter(prof => prof.specialty === specialty);
};
