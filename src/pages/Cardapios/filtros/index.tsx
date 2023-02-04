import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";
import classNames from "classnames";

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(label: string, id: number) {
    if (filtro === id) return setFiltro(null);
    return setFiltro(id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map(({ label, id }) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles["filtros__filtro--ativo"]]: filtro === id,
          })}
          key={id}
          onClick={() => selecionarFiltro(label, id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
