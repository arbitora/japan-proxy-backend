import {Entity, model, property} from '@loopback/repository';
import {v4 as uuid} from 'uuid';

@model({settings: {strict: false}})
export class Product extends Entity {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
    id: true,
    required: true,
    default: () => uuid(),
  })
  uuid: string;

  @property({
    type: 'string',
  })
  link?: string;

  @property({
    type: 'number',
    default: 0,
  })
  count: number;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
    default: 0,
  })
  price: number;

  @property({
    type: 'number',
    default: 0,
  })
  weight: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  ordered?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  shipped?: boolean;

  @property({
    type: 'string',
    format: 'date',
  })
  created?: Date;

  @property({
    type: 'string',
    format: 'date',
  })
  updated?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
