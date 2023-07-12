import { useState } from "react"

const SearchPage = () => {
  const [input, setInput] = useState("")

  const handleSearch = () => {}
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-between">
      <div className="flex justify-center mt-1">
        <div className="join">
          <input
            className="input input-bordered join-item dark:text-secondary"
            placeholder="Par ici..."
            type="text"
            onChange={(e) => {
              setInput(e.target.value)
            }}
          />
          <button
            className="bg-secondary dark:text-base-100 btn join-item rounded-r-full"
            onClick={handleSearch}
          >
            Chercher
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
