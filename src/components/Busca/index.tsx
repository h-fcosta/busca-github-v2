import { useState } from "react";

interface Props {
  onUserBusca: (value: string) => void;
}

const Busca: React.FC<Props> = ({ onUserBusca }) => {
  const [busca, setBusca] = useState("");

  const buscar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onUserBusca(busca);
  };

  return (
    <div className="box">
      <div className="control">
        <form onSubmit={buscar}>
          <div className="columns is-mobile">
            <div className="column is-5 is-offset-one-quarter">
              <input
                className="input"
                type="text"
                name="busca"
                placeholder="Pesquise um usuário"
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
            <div className="column">
              <button className="button" type="submit">
                Buscar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Busca;
