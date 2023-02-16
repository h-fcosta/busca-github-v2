import { useState, useEffect } from "react";
import http from "../../http";
import IUsers from "../../interface/IUsers";
import IRepos from "../../interface/IRepos";

interface Props {
  userBusca: string;
}

const Resultados: React.FC<Props> = ({ userBusca }) => {
  const [resultado, setResultado] = useState<IUsers[]>([]);
  const [repos, setRepos] = useState<IRepos[]>([]);

  useEffect(() => {
    if (!userBusca) return;

    const pegaUser = async () => {
      await http
        .get(`search/users?q=${userBusca}`)
        .then((res) => setResultado(res.data.items));
    };

    const pegaRepos = async () => {
      await http
        .get(`users/${userBusca}/repos?sort=updated&per_page=5`)
        .then((res) => setRepos(res.data));
    };

    pegaUser();
    pegaRepos();
  }, [userBusca]);

  return (
    <>
      <div className="columns">
        <div className="column is-6 is-offset-3">
          {userBusca &&
            resultado.map((resultBusca) => (
              <div className="card" key={resultBusca.id}>
                <header className="card-header">
                  <a href={resultBusca.html_url} target="_blank">
                    <p className="card-header-title">{resultBusca.login}</p>
                  </a>
                </header>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-128x128">
                        <img
                          src={resultBusca.avatar_url}
                          alt="Avatar do Usuário"
                        />
                      </figure>
                    </div>
                    <div className="content is-small">
                      <p className="title is-4" style={{ marginBottom: 0 }}>
                        Repositórios mais recentes
                      </p>
                      <ul>
                        {repos.map((resultRepos) => (
                          <li key={resultRepos.id}>
                            <p className="subtitle is-6">
                              <a
                                href={`http://github.com/${resultRepos.full_name}`}
                                target="_blank"
                              >
                                {resultRepos.name}
                              </a>
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <br />
    </>
  );
};

export default Resultados;
