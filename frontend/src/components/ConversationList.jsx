import React from 'react'
import profileP from '../assets/Profils/1.png'

import profile2 from '../assets/Profils/2.png'
const ConversationList = () => {
  const conversations = [
    {
      utilisateur: 'Utilisateur1',
      message: 'Salut, ça va ?',
      img: profileP,
    },
    {
      utilisateur: 'Utilisateur2',
      message: 'Oui, et toi ?',
      img: profile2,
    },
    {
      utilisateur: 'Utilisateur3',
      message: 'Je vais bien aussi, merci !',
      img: '../assets/Profils/4.png',
    },
    {
      utilisateur: 'Utilisateur4',
      message: "Qu'as-tu prévu pour aujourd'hui ?",
      img: '../assets/Profils/5.png',
    },
    {
      utilisateur: 'Utilisateur4',
      message: 'Rien de spécial, juste du travail.',
      img: '../assets/Profils/6.png',
    },
    {
      utilisateur: 'Utilisateur7',
      message: 'Bon courage !',
      img: '../assets/Profils/2.png',
    },
  ]

  return (
    <div>
      <div className='flex items-center gap-12   mb-4 border-b-2 border-primary p-5'>
        <img
          className='ml-4 w-14 rounded-full justify-start'
          src={profileP}
          alt='profile-picture'
        />
        <h1 className='text-xl '>Messagerie</h1>
      </div>
      <div>
        <input
          className='flex m-auto mt-6 p-2 mb-6 rounded-xl bg-base-100 w-80 border border-secondary outline-neutral-focus text-center'
          type='text'
          placeholder='Chercher un message ...'
        />
      </div>
      <div className='mt-2'>
        {conversations.map((conversation, index) => (
          <div
            key={index}
            className='rounded-lg p-4 mb-4 border border-secondary mx-3'
          >
            <div className='flex items-center mb-2'>
              <img
                className='w-8 h-8 rounded-full'
                src={conversation.img}
                alt='user-profile'
              />
              <h1 className='font-bold ml-2'>{conversation.utilisateur}</h1>
            </div>
            <p>{conversation.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConversationList
