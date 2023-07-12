import profileP from "../../public/1.png"

import profile2 from "../../public/2.png"
const ConversationList = () => {
  const conversations = [
    {
      utilisateur: "Utilisateur1",
      message: "Salut, ça va ?",
      img: profileP,
    },
    {
      utilisateur: "Utilisateur2",
      message: "Oui, et toi ?",
      img: profile2,
    },
    {
      utilisateur: "Utilisateur4",
      message: "Je vais bien aussi, merci !",
      img: "/4.png",
    },
    {
      utilisateur: "Utilisateur5",
      message: "Qu'as-tu prévu pour aujourd'hui ?",
      img: "/5.png",
    },
    {
      utilisateur: "Utilisateur6",
      message: "Rien de spécial, juste du travail.",
      img: "/6.png",
    },
    {
      utilisateur: "Utilisateur7",
      message: "Bon courage !",
      img: "/7.png",
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="m-auto">
        <input
          className="flex m-3 p-2 mb-6 rounded-xl bg-base-100 w-80 border border-accent outline-neutral-focus text-center"
          type="text"
          placeholder="Chercher un message ..."
        />
      </div>
      <div className="">
        {conversations.map((conversation, index) => (
          <div
            key={index}
            className="rounded-[1rem] p-2 mb-4 border-2 border-neutral mx-3"
          >
            <div className="flex items-center mb-2">
              <img
                className="w-12 h-12 rounded-full border-2 border-primary"
                src={conversation.img}
                alt="user-profile"
              />
              <p className="dark:text-secondary font-semibold ml-2">
                {conversation.utilisateur}
              </p>
            </div>
            <p>{conversation.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConversationList
