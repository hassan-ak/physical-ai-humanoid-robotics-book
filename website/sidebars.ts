import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Pre-phase: Setup & Foundation',
      items: [
        'pre-phase/bom',
        'pre-phase/setup',
        'pre-phase/mindset',
      ],
    },
    {
      type: 'category',
      label: 'Module 1: Introduction to Physical AI (Week 1-5)',
      items: [
        'module-1/week-1',
        'module-1/week-2',
        'module-1/week-3',
        'module-1/week-4',
        'module-1/week-5',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Robotics Simulation & Navigation (Week 6-7)',
      items: [
        'module-2/week-6',
        'module-2/week-7',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: Perception & Control Systems (Week 8-10)',
      items: [
        'module-3/week-8',
        'module-3/week-9',
        'module-3/week-10',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Advanced AI & Capstone (Week 11-13)',
      items: [
        'module-4/week-11',
        'module-4/week-12',
        'module-4/week-13',
        'module-4/capstone',
      ],
    },
  ],
};

export default sidebars;
