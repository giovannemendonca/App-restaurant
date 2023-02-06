import { useState } from 'react';
import Buscador from './buscador';
import styles from './Cardapio.module.scss';
import Filtros from './filtros';
import Itens from './itens';
import Ordenador from './ordenador';
import stylesTema from 'styles/Tema.module.scss';

const Cardapio = () => {
  const [busca, setBusca] = useState<string>('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<string>('');

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
};

export default Cardapio;
