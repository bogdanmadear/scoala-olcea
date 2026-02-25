export default {
  name: 'anunt',
  title: 'Anunț',
  type: 'document',
  fields: [
    {
      name: 'titlu',
      title: 'Titlu',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'continut',
      title: 'Conținut',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      name: 'data',
      title: 'Data',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'tip',
      title: 'Tip anunț',
      type: 'string',
      options: {
        list: [
          { title: 'Important', value: 'Important' },
          { title: 'Informativ', value: 'Informativ' },
          { title: 'Eveniment', value: 'Eveniment' },
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publicat',
      title: 'Publicat',
      type: 'boolean',
      description: 'Debifează pentru a salva ca draft fără a apărea pe site',
      initialValue: true
    },
  ],
  orderings: [
    {
      title: 'Data, descrescător',
      name: 'dataDesc',
      by: [{ field: 'data', direction: 'desc' }]
    }
  ],
  preview: {
    select: { title: 'titlu', subtitle: 'data' }
  }
}