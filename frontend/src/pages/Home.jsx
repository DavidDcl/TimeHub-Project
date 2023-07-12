import { useState } from "react"

const Home = () => {
  const [modal, setModal] = useState(true)

  const handleConnexion = () => {
    setModal(false)
  }

  return (
    <div>
      <h1>Liste de Posts</h1>
      {modal && (
        <div className="hero min-h-[80vh] bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Connecte toi !</h1>
              <p className="py-6">
                Il est l'heure d'aller dans la 4 ème dimension pour retrouver
                tes potos préférés !
              </p>
            </div>
            <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-secondary">
                      Nom d'utilisateur
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="nom d'utilisateur"
                    className="input input-bordered dark:text-secondary"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-secondary">
                      Mot de passe
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="mot de passe"
                    className="input input-bordered dark:text-secondary"
                  />
                  <label className="label"></label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={handleConnexion}>
                    Connexion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
