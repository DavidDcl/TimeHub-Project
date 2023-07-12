import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import userImage1 from "../assets/Profils/1.png";
import userImage2 from "../assets/Profils/2.png";
import userLandscape1 from "../assets/Landscapes/1.jpg";
import userLandscape2 from "../assets/Landscapes/2.jpg";

import Post from "../components/Post";

const ProfilePage = () => {
  const [profile, setProfile] = useState();
  const [posts, setPosts] = useState();
  const [isValid1, setIsValid1] = useState(true);
  const [isValid2, setIsValid2] = useState(true);
  const [isLoading1, setIsLoading1] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/api/users/${id}`)
      .then((response) => {
        if (!response.ok) setIsValid1(false);
        return response.json();
      })
      .then((response) => {
        setProfile(response);
        setIsLoading1(false);
      })
      .catch((err) => console.error(err));

    fetch(`http://localhost:8000/api/posts/`)
      .then((response) => {
        if (!response.ok) setIsValid2(false);
        return response.json();
      })
      .then((response) => {
        setPosts(response);
        setIsLoading2(false);
      })
      .catch((err) => console.error(err));
  }, [id]);
  console.log(profile);
  console.log(posts);

  return (
    <div>
      {isLoading1 && isLoading2 && <h1>Chargement en cours</h1>}
      {!isValid1 && !isValid2 && <h1>Aucun profil correspondant</h1>}
      {isValid1 && !isLoading1 && isValid2 && !isLoading2 && (
        <>
          <div
            className="m-3
          "
          >{`${profile.firstname} @${profile.nickname}`}</div>
          <div className="relative">
            <div>
              {id == 1 ? (
                <img
                  className="w-full h-36"
                  src={userLandscape1}
                  alt="Einstein"
                />
              ) : (
                <img
                  className="w-full h-36"
                  src={userLandscape2}
                  alt="Cleopatre"
                />
              )}
            </div>
            <div className="absolute left-0 -bottom-12">
              {id == 1 ? (
                <img src={userImage1} alt="Einstein" />
              ) : (
                <img src={userImage2} alt="Cleopatre" />
              )}
            </div>
          </div>
          <div className="mt-12 ml-3 mb-2 text-lg">
            {profile.firstname} {profile.lastname}
          </div>
          <div className="m-3">
            {id == 1 ? (
              <p>
                Génie, découvreur de la théorie de la relativité, prix Nobel de
                physique
              </p>
            ) : (
              <p>Reine du Nil, beauté somptueuse, cat loveuse</p>
            )}
          </div>

          <div>
            {id == 1 ? (
              <div>
                {posts
                  .filter((post) => post.uid === 1)
                  .map((post) => (
                    <Post key={post.id} post={post} />
                  ))}
              </div>
            ) : (
              <div>
                {posts
                  .filter((post) => post.uid === 2)
                  .map((post) => (
                    <Post key={post.id} post={post} />
                  ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
