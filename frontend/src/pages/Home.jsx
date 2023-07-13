import { useEffect, useState } from 'react'
import Post from '../components/Post'
import FriendsList from '../components/FriendList'
import SideBar from './../components/SideBar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = ({ setOk }) => {
  const [modal, setModal] = useState(true)
  const [posts, setPosts] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const [content, setContent] = useState('')
  const [active, setActive] = useState(false)
  const [username, setUsername] = useState('')
  const [userExists, setUserExists] = useState(false)

  useEffect(() => {
    fetchData()
  }, [refresh])

  useEffect(() => {
    const storageModal = localStorage.getItem('modalState')
    if (storageModal === 'false') {
      setModal(false)
    }
  }, [])

  useEffect(() => {
    checkUserExists()
  }, [username])

  const handleConnexion = () => {
    if (userExists) {
      setModal(false)
      localStorage.setItem('modalState', 'false')
      setActive(!active)
      setOk(true)
    } else {
      toast.error('User does not exist')
    }
  }

  const fetchData = async () => {
    await fetch('http://localhost:8000/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }

  const handleSubmit = async (e) => {
    if (content) {
      e.preventDefault()
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: `${content}` }),
      }
      fetch(`http://localhost:8000/api/posts`, requestOptions)
      setContent('')
      setRefresh(!refresh)
    } else {
      e.preventDefault()
    }
  }

  const checkUserExists = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/users`)
      const data = await response.json()

      if (data[0].nickname === username) {
        setUserExists(username)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='mt-4'>
      {active && (
        <audio
          className='hidden'
          src='../../public/pornhub_intro.mp3'
          controls={active}
          autoPlay={active}
        />
      )}
      {modal ? (
        <div className='hero min-h-[80vh] bg-base-200'>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className='text-center lg:text-left'>
              <h1 className='text-4xl font-bold'>Connecte toi !</h1>
              <p className='py-4'>
                {`Il est l'heure d'aller dans la 4 ème dimension pour retrouver
                tes potos préférés !`}
              </p>
            </div>
            <div className=' card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
              <div className='card-body'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text dark:text-secondary'>
                      {`Nom d'utilisateur`}
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder="nom d'utilisateur"
                    className='input input-bordered dark:text-secondary'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text dark:text-secondary'>
                      Mot de passe
                    </span>
                  </label>
                  <input
                    type='password'
                    placeholder='mot de passe'
                    className='input input-bordered dark:text-secondary'
                  />
                  <label className='label'></label>
                </div>
                <div className='form-control mt-6'>
                  <button className='btn btn-primary' onClick={handleConnexion}>
                    Connexion
                  </button>
                </div>
                <div className=''>
                  <iframe
                    src='https://giphy.com/embed/3o7aD2d7hy9ktXNDP2'
                    width='100%'
                    height='100%'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='lg:flex'>
            <SideBar />
            <div className='mt-4'>
              <div className='flex'>
                <div className='w-full'>
                  <div className='flex rounded-lg border-2 border-primary mx-3 mb-5'>
                    <div className='flex flex-col'>
                      <img
                        className='rounded-full w-12 h-12 ml-3 mt-3 mr-8'
                        src='/1.png'
                        alt=''
                      />
                    </div>
                    <form className='w-full' onSubmit={handleSubmit}>
                      <div className='flex flex-col mt-3'>
                        <textarea
                          className='bg-transparent flex-grow mt-3 border-none outline-none resize-none'
                          placeholder="Qu'as-tu en tête ? ..."
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        />
                        <div className='flex justify-end'>
                          <button
                            className='mr-3 mb-3 text-secondary bg-accent rounded-lg px-3 py-1'
                            type='submit'
                          >
                            Post
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div>
                    {posts &&
                      posts.map((post) => (
                        <Post
                          key={post.id}
                          post={post}
                          refresh={refresh}
                          setRefresh={setRefresh}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full max-w-[7rem]  justify-end ml-3 h-full hidden md:flex'>
              <FriendsList />
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  )
}

export default Home
