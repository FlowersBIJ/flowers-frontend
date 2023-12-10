export type FlowerModel = {
    id: string,
    income_price: number,
    outcome_price: number,
    hotline_miami_price: number,
    stems: number,
    flower_name: string,
    flower_sort: string,
    flower_length: number,
    total: number,
    total_sale: number,
    difference: number
}

export type Invoice = {
  invoice: string,
  plantation: string,
}

export type BoxModel = {
  release_date: Date;
  box_count: number;
  box_type: string,
  invoice: Invoice,
  flowers: FlowerModel[]
}

export type OrderModel = {
  id: string;
  manager_name: string;
  comment: string;
  outcome_invoice: string;
  order_type: string;
  boxes: BoxModel[];
}

export type ClientModel = {
  client_name: string;
  alternative_name: string;
  country: string;
  city: string;
  agencie: string;
  truck: string;
  orders: OrderModel[];
};


export type ShipmentModel = {
  // Flower
  id: string,
  income_price: number,
  outcome_price: number,
  hotline_miami_price: number,
  stems: number,
  flower_name: string,
  flower_sort: string,
  flower_length: number,
  total: number,
  total_sale: number,
  difference: number,
  // Invoice
  invoice: string,
  plantation: string,
  // Box
  release_date: string;
  box_count: number;
  box_type: string,
  // Order
  manager_name: string;
  comment: string;
  outcome_invoice: string;
  order_type: string;
  // Client
  client_name: string;
  country: string;
  city: string;
  agencie: string;
  truck: string;

  // Generic
  done: boolean;
};
