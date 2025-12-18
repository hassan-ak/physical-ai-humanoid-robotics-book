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
      label: 'Module 1: Introduction to Physical AI',
      items: [
        'module-1/chapter-1',
        'module-1/chapter-2',
        'module-1/chapter-3',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Robotics Simulation & Navigation',
      items: [
        'module-2/chapter-4',
        'module-2/chapter-5',
        'module-2/chapter-6',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: Perception & Control Systems',
      items: [
        'module-3/chapter-7',
        'module-3/chapter-8',
        'module-3/chapter-9',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Advanced AI & Capstone',
      items: [
        'module-4/chapter-10',
        'module-4/chapter-11',
        'module-4/chapter-12',
        'module-4/chapter-13',
      ],
    },
  ],
};

export default sidebars;
