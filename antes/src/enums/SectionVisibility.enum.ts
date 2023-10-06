import * as SectionNames from './sectionNames.enum';

export enum SectionVisibility {
  ALL = "Todos",
  ACTIVE = "Ativos"
}

export const SectionComponents = {
  [SectionVisibility.ALL]: [
    SectionNames.HOME,
    SectionNames.ABOUT,
    SectionNames.CONTACT,
    SectionNames.TOOLS,
    SectionNames.WORK,
  ],
  [SectionVisibility.ACTIVE]: [
    SectionNames.HOME,
    SectionNames.ABOUT,
  ]
};
