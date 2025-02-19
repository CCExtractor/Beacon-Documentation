import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '6ea'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '32f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '84f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '69a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '39a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'd5c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '766'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '697'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '92c'),
    routes: [
      {
        path: '/docs/backend/envsetup/mail',
        component: ComponentCreator('/docs/backend/envsetup/mail', '091'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/backend/envsetup/mongodb',
        component: ComponentCreator('/docs/backend/envsetup/mongodb', '2c5'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/backend/envsetup/redis',
        component: ComponentCreator('/docs/backend/envsetup/redis', 'a61'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/backend/getting_started',
        component: ComponentCreator('/docs/backend/getting_started', '42d'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/backend/introduction',
        component: ComponentCreator('/docs/backend/introduction', 'ceb'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/backend/resolvers',
        component: ComponentCreator('/docs/backend/resolvers', 'b72'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/backend/schema',
        component: ComponentCreator('/docs/backend/schema', '6c8'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/backend/structure',
        component: ComponentCreator('/docs/backend/structure', '60b'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/category/backend',
        component: ComponentCreator('/docs/category/backend', '203'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/category/env-setup',
        component: ComponentCreator('/docs/category/env-setup', '792'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/category/frontend',
        component: ComponentCreator('/docs/category/frontend', '78a'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/frontend/firbase',
        component: ComponentCreator('/docs/frontend/firbase', 'b37'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/frontend/getting_started',
        component: ComponentCreator('/docs/frontend/getting_started', 'ead'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/frontend/structure',
        component: ComponentCreator('/docs/frontend/structure', 'd10'),
        exact: true,
        sidebar: "docsSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7a8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
