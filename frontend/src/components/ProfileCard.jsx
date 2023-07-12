import React from "react"
import { Link } from "react-router-dom"

export default function ProfileCard({ user }) {
  return (
    <Link to={`/profile/${user.id}`}>
      <div className="hover:scale-105 flex gap-5 border-2 border-secondary rounded-[2rem] p-4">
        <img
          src={`/${user.id}.png`}
          alt={`${user.firstname}`}
          className="border-4 border-primary rounded-full "
        />
        <div className="flex flex-col justify-center dark:text-secondary">
          <div>
            {user.firstname} {user.lastname}
          </div>
          <div>@{user.nickname}</div>
        </div>
      </div>
    </Link>
  )
}
