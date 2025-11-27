import { studyData as originalStudyData } from './studyData';
import { sectionOverviewsMap } from './sectionOverviews';
import type { StudyData, Section } from '../types';

/**
 * Enhanced study data that merges existing game_modes with new overview/category data.
 * This provides a complete Section object with all necessary fields for the new UI.
 */
export const studyData: StudyData = {
  sections: originalStudyData.sections.map((section): Section => {
    const enhancementData = sectionOverviewsMap[section.section];

    if (!enhancementData) {
      console.warn(`No overview data found for section: ${section.section}`);
      // Provide default data for any sections without overviews
      return {
        id: section.section.toLowerCase().replace(/\s+/g, '_'),
        section: section.section,
        category: "Uncategorized",
        overview: {
          summary: "Overview coming soon.",
          objectives: [],
          key_points: [],
        },
        game_modes: section.game_modes
      };
    }

    return {
      ...enhancementData,
      section: section.section,
      game_modes: section.game_modes
    };
  })
};

/**
 * Get sections grouped by category for organized display
 */
export const getSectionsByCategory = (): Record<string, Section[]> => {
  const grouped: Record<string, Section[]> = {};

  studyData.sections.forEach(section => {
    if (!grouped[section.category]) {
      grouped[section.category] = [];
    }
    grouped[section.category].push(section);
  });

  return grouped;
};

/**
 * Get all unique categories in order
 */
export const getCategories = (): string[] => {
  const categoryOrder = [
    "Breast & Lactation",
    "Menstrual & Uterine Disorders",
    "PCOS & Endometriosis",
    "Pregnancy & Postpartum",
    "Lifecycle & Fertility Control"
  ];

  const categories = new Set<string>();
  studyData.sections.forEach(section => {
    categories.add(section.category);
  });

  // Return in defined order, with any new categories at the end
  return categoryOrder.filter(cat => categories.has(cat))
    .concat(Array.from(categories).filter(cat => !categoryOrder.includes(cat)));
};

/**
 * Find a section by its ID
 */
export const getSectionById = (id: string): Section | undefined => {
  return studyData.sections.find(section => section.id === id);
};
