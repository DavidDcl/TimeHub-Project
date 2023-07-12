import React from "react"
import { Link } from "react-router-dom"

export default function ProfileCard({ user }) {
  return (
    <Link to={`/profile/${user.id}`}>
      <div className="hover:bg-slate-800 flex gap-5 border-2 border-secondary rounded-[2rem] p-1.5">
        <img
          src={`/${user.id}.png`}
          alt={`${user.firstname}`}
          className="border-4 border-primary rounded-full "
        />
        <div className="flex flex-col justify-center gap-2 text-xl dark:text-secondary">
          <div>
            {user.firstname} {user.lastname}
          </div>
          <div>@{user.nickname}</div>
        </div>
      </div>
    </Link>
  )
}
