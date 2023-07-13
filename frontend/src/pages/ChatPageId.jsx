import pp from "../../public/2.png";

const ChatPageId = () => {
  const conversation = [
    { id: 1, message: "Salut, ça va ?" },
    { id: 2, message: "Oui, et toi ?" },
    { id: 3, message: "Je vais bien aussi, merci !" },
    {
      id: 4,
      message: "Qu'as-tu prévu pour aujourd'hui ?",
    },
    {
      id: 5,
      message: "Rien de spécial, juste du travail.",
    },
    { id: 6, message: "Bon courage !" },
    {
      id: 7,
      message: "Merci ! Tu as des projets pour aujourd'hui ?",
    },
    {
      id: 8,
      message: "Je vais faire du shopping avec des amis  .",
    },
    {
      id: 9,
      message: "Ça semble amusant ! Profite bien !",
    },
    { id: 10, message: "Merci, je le ferai !" },
    {
      id: 11,
      message: "Tu as vu le dernier film qui est sorti ?",
    },
    {
      id: 12,
      message: "Non, pas encore. Tu me le recommandes ?",
    },
    {
      id: 13,
      message: "Oui, c'était génial ! Je te le recommande.",
    },
    {
      id: 14,
      message: "Super, je vais le regarder alors.",
    },
    {
      id: 15,
      message: "Tu me diras ce que tu en penses !",
    },
    {
      id: 16,
      message: "Bien sûr, je te ferai un retour.",
    },
    {
      id: 17,
      message: "Merci, j'attends avec impatience !",
    },
    { id: 18, message: "De rien, c'est avec plaisir !" },
    {
      id: 19,
      message: "Au fait, as-tu des plans pour le week-end ?",
    },
    {
      id: 20,
      message: "Oui, je vais rendre visite à ma famille.",
    },
    {
      id: 21,
      message: "C'est génial ! Profite de ce moment.",
    },
  ];
  return (
    <div className="flex flex-col">
      <div
        id=" en tete "
        className="w-full flex gap-3 border-b-2 border-secondary"
      >
        <div id="Pp" className="w-20 pb-2">
          <img src={pp} alt="Cleo" />
        </div>
        <div id="peusdo " className="flex gap-2 text-2xl">
          <h1>Cleopatre</h1>
          <p>@Reine_Du_Nil</p>
        </div>
      </div>
      <div id="conversation" className="flex flex-col m-2 gap-3">
        {conversation.map((elem) => (
          <div
            key={elem.id}
            className={`${
              elem.id % 2 === 0
                ? "flex justify-end ml-3"
                : "flex justify-start mr-3"
            }`}
          >
            <p
              className={`${
                elem.id % 2 === 0
                  ? "flex py-3 px-2 bg-accent rounded-xl"
                  : "flex py-3 px-2 rounded-xl bg-primary"
              }`}
            >
              {elem.message}
            </p>
          </div>
        ))}
      </div>
      <div
        id=" message "
        className="flex w-full 11/12 justify-center bg-base-100 sticky bottom-16   "
      >
        <input
          type="text"
          placeholder="Ecris le message"
          className=" bg-base-100 border rounded-lg border-secondary p-2 mt-3 w-11/12 "
        />
      </div>
    </div>
  );
};

export default ChatPageId;
