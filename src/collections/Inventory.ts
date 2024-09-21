import { CollectionConfig } from 'payload'

const Inventory: CollectionConfig = {
  slug: 'inventory',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Inventory',
    plural: 'Inventories',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'featuredphoto',
      type: 'text',
      required: true,
    },
    {
      name: 'dealer_id',
      type: 'number',
      required: true,
    },
    {
      name: 'vin',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'text',
      required: true,
    },
    {
      name: 'statusoverride',
      type: 'text',
    },
    {
      name: 'featured',
      type: 'number',
      required: true,
    },
    {
      name: 'stocknumber',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'originalprice',
      type: 'number',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'specialprice',
      type: 'number',
    },
    {
      name: 'addonprice',
      type: 'number',
    },
    {
      name: 'msrp',
      type: 'number',
    },
    {
      name: 'year',
      type: 'number',
      required: true,
    },
    {
      name: 'make',
      type: 'text',
      required: true,
    },
    {
      name: 'model',
      type: 'text',
      required: true,
    },
    {
      name: 'modelnumber',
      type: 'text',
    },
    {
      name: 'trim',
      type: 'text',
    },
    {
      name: 'series',
      type: 'text',
    },
    {
      name: 'body',
      type: 'text',
      required: true,
    },
    {
      name: 'condition',
      type: 'text',
      required: true,
    },
    {
      name: 'certified',
      type: 'number',
    },
    {
      name: 'mileage',
      type: 'number',
      required: true,
    },
    {
      name: 'exteriorcolor',
      type: 'text',
    },
    {
      name: 'interiorcolor',
      type: 'text',
    },
    {
      name: 'exteriorcolorstandard',
      type: 'text',
    },
    {
      name: 'interiorcolorstandard',
      type: 'text',
    },
    {
      name: 'fuel',
      type: 'text',
      required: true,
    },
    {
      name: 'transmission',
      type: 'text',
    },
    {
      name: 'transmissionstandard',
      type: 'text',
    },
    {
      name: 'drivetrain',
      type: 'text',
      required: true,
    },
    {
      name: 'drivetrainstandard',
      type: 'text',
    },
    {
      name: 'engine',
      type: 'text',
    },
    {
      name: 'displacement',
      type: 'number',
    },
    {
      name: 'cylinders',
      type: 'number',
    },
    {
      name: 'maxhorsepower',
      type: 'number',
    },
    {
      name: 'maxhorsepowerat',
      type: 'number',
    },
    {
      name: 'maxtorque',
      type: 'number',
    },
    {
      name: 'maxtorqueat',
      type: 'number',
    },
    {
      name: 'aspiration',
      type: 'text',
    },
    {
      name: 'mpgcity',
      type: 'number',
    },
    {
      name: 'mpghwy',
      type: 'number',
    },
    {
      name: 'doors',
      type: 'number',
    },
    {
      name: 'seatingcapacity',
      type: 'number',
    },
    {
      name: 'towingcapacity',
      type: 'number',
    },
    {
      name: 'carfax',
      type: 'group',
      fields: [
        { name: 'carfaxurl', type: 'text' },
        { name: 'carfaxicon', type: 'text' },
        { name: 'carfaxalt', type: 'text' },
        { name: 'carfaxoneowner', type: 'number' },
        { name: 'carfaxownerstext', type: 'text' },
        { name: 'carfaxownersicon', type: 'text' },
        { name: 'carfaxusetext', type: 'text' },
        { name: 'carfaxuseicon', type: 'text' },
        { name: 'carfaxservicerecords', type: 'number' },
        { name: 'carfaxaccidenttext', type: 'text' },
        { name: 'carfaxaccidenticon', type: 'text' },
        { name: 'carfaxsnapshotkey', type: 'text' },
      ],
    },
    {
      name: 'autocheck',
      type: 'text',
    },
    {
      name: 'photocount',
      type: 'number',
    },
    {label: 'Notes',
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'incentives',
      type: 'text',
    },
    {
      name: 'metatitle',
      type: 'text',
    },
    {
      name: 'metadescription',
      type: 'text',
    },
    {
      name: 'vehicledescription',
      type: 'textarea',
    },
    {
      name: 'dealer',
      type: 'group',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'city', type: 'text' },
        { name: 'state', type: 'text' },
        { name: 'phonemain', type: 'text' },
        { name: 'capitalone_token', type: 'text' },
      ],
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: 'hot',
      type: 'number',
    },
    {
      name: 'new',
      type: 'number',
    },
    {
      name: 'finance',
      type: 'group',
      fields: [
        { name: 'down_pct', type: 'number' },
        { name: 'salestaxstate', type: 'text' },
        { name: 'vehicle_amount', type: 'number' },
        { name: 'shipping_amount', type: 'number' },
        { name: 'tradein_amount', type: 'number' },
        { name: 'tradein_remainingbalance', type: 'number' },
        { name: 'down_payment', type: 'number' },
        { name: 'doctitlefees_amount', type: 'number' },
        { name: 'tax_amount', type: 'number' },
        { name: 'tax_rate', type: 'number' },
        { name: 'tax_rate_formatted', type: 'number' },
        { name: 'tax_tradeincredit', type: 'number' },
        { name: 'loan_amount', type: 'number' },
        { name: 'loan_months', type: 'number' },
        { name: 'interest_rate', type: 'number' },
        { name: 'interest_rate_formatted', type: 'number' },
        { name: 'credit_tier', type: 'text' },
        { name: 'total_cost', type: 'number' },
        { name: 'total_interest', type: 'number' },
        { name: 'monthly_payment', type: 'number' },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      labels: {
        singular: 'Feature',
        plural: 'Features',
      },
      minRows: 1,
      maxRows: 50,
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Feature Name',
        },
      ],
    },
    {
      name: 'photos',
      type: 'array',
      fields: [
        {
          name: 'src',
          type: 'text',
        },
      ],
    },
    {
      name: 'video',
      type: 'group',
      fields: [
        { name: 'source', type: 'text' },
        { name: 'url', type: 'text' },
        { name: 'autoplay', type: 'text' },
        { name: 'aspectratio', type: 'text' },
      ],
    },
  ],
}

export default Inventory
