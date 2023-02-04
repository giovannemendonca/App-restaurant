import { useEffect, useState } from "react";
import Item from "./item";
import cardapio from "./itens.json";
import styles from "./Itens.module.scss";

type category = {
  id: number;
  label: string;
};

interface Ilista {
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  id: number;
  category: category;
}

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens({ busca, filtro, ordenador }: Props) {
  const [lista, setLista] = useState<Ilista[]>(cardapio);

  function testaBusca(title: string): boolean {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  function testaFiltro(id: number): boolean {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: Ilista[]) {
    switch (ordenador) {
      case "porcao":
        return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_pessias":
        return novaLista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));

      default:
        return novaLista;
    }
  }

  useEffect(() => {
    const novaLista: Ilista[] = cardapio.filter(
      ({ title, category }) => testaBusca(title) && testaFiltro(category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
