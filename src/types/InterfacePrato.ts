type category = {
    id: number;
    label: string;
  };
  
export interface Cardapio {
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    id: number;
    category: category;
  }
  