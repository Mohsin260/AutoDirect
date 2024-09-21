import { CollectionConfig } from 'payload'

const VehicleCarousel: CollectionConfig = {
  slug: 'vehicle_carousel',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'VehicleCarousel',
    plural: 'VehicleCarousels',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
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
      name: 'stocknumber',
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
      name: 'photos',
      type: 'array',
      fields: [
        {
          name: 'src',
          type: 'text',
        },
      ],
    },
  ],
}

export default VehicleCarousel
