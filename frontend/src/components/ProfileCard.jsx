import React from "react"

export default function ProfileCard({ user }) {
  return (
    <div className="hover:bg-slate-800 flex gap-5 border-2 border-secondary rounded-[2rem] p-1.5">
      <img
        src={`/${user.id}.png`}
        alt={`${user.firstname}`}
        className="border-4 border-primary rounded-full "
      />
      <div className="flex flex-col justify-center  gap-2 dark:text-secondary text-xl ">
        <div>
          {user.firstname} {user.lastname}
        </div>
        <div>@{user.nickname}</div>
      </div>
    </div>
  )
}
