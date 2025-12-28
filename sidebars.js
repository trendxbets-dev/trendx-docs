/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // homepage (not shown as link)
    },
     {
      type: 'doc',
      id: 'philosophy',
      label: 'Philosophy',
    },
    {
      type: 'doc',
      id: 'governance',
      label: 'Governance (DAO)',
    },
    {
      type: 'doc',
      id: 'token-economics',
      label: 'Token Economics',
    },
    {
      type: 'doc',
      id: 'payout-system',
      label: 'Payout System',
    },
  ],
};

export default sidebars;
