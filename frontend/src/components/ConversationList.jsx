import profileP from "../../public/1.png";

import profile2 from "../../public/2.png";
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
  ];

  return (
    <div>
      <div className="flex items-center justify-center   mb-4  p-5">
        <h1 className="text-2xl ">Messagerie</h1>
      </div>
      <div>
        <input
          className="flex m-auto mt-6 p-2 mb-6 rounded-xl bg-base-100 w-80 border border-secondary outline-neutral-focus text-center"
          type="text"
          placeholder="Chercher un message ..."
        />
      </div>
      <div className="mt-2">
        {conversations.map((conversation, index) => (
          <div
            key={index}
            className="rounded-lg p-4 mb-4 border border-secondary mx-3"
          >
            <div className="flex items-center mb-2">
              <img
                className="w-8 h-8 rounded-full"
                src={conversation.img}
                alt="user-profile"
              />
              <h1 className="font-bold ml-2">{conversation.utilisateur}</h1>
            </div>
            <p>{conversation.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
