import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import Buscador from "./buscador";
import styles from "./Cardapio.module.scss";
import Filtros from "./filtros";
import Itens from "./itens";
import Ordenador from "./ordenador";

const Cardapio = () => {
  const [busca, setBusca] = useState<string>("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<string>("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <nav>
        <header className={styles.header}>
          <div className={styles.header__text}>A casa do código e da massa</div>
        </header>
        <section className={styles.cardapio}>
          <h3 className={styles.cardapio__titulo}>Cardápio</h3>
          <Buscador busca={busca} setBusca={setBusca} />
          <div className={styles.cardapio__filtros}>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
          </div>
          <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
        </section>
      </nav>
    </main>
  );
};

export default Cardapio;
