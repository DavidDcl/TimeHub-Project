import React from "react"

function Contact() {
  return (
    <div className="mt-3 flex justify-content">
      <form className="w-full flex flex-col items-center gap-5" action="">
        <div className="form-control ">
          <label className="input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span className="">Prénom</span>
            <input
              type="text"
              placeholder="Votre prénom"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span>Nom</span>
            <input
              type="text"
              placeholder="Votre nom"
              className="input input-bordered"
            />
          </label>
        </div>
      </form>
    </div>
  )
}

export default Contact
