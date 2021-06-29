export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60daa03a4ba1e640e6d310dc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fncv1sor',
                  apiId: '17054aec-3b9c-4c46-ba34-52e6d9f8be88'
                },
                {
                  buildHookId: '60daa03b43a7143bd0446218',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-oc42nj18',
                  apiId: 'd5a2b216-00b6-419d-9bda-d6f074f57aa1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/IsaacArnold/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-oc42nj18.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
