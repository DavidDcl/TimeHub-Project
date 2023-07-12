import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import userImage1 from "../assets/Profils/1.png";
import userImage2 from "../assets/Profils/2.png";
import userLandscape1 from "../assets/Landscapes/1.jpg";
import userLandscape2 from "../assets/Landscapes/2.jpg";

const ProfilePage = () => {
  const [profile, setProfile] = useState();
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/api/users/${id}`)
      .then((response) => {
        if (!response.ok) setIsValid(false);
        return response.json();
      })
      .then((response) => {
        setProfile(response);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);
  console.log(profile);

  return (
    <div>
      {isLoading && <h1>Chargement en cours</h1>}
      {!isValid && <h1>Aucun profil correspondant</h1>}
      {isValid && !isLoading && (
        <>
          <div>{`${profile.firstname} @${profile.nickname}`}</div>
          <div>
            {id == 1 ? (
              <img src={userLandscape1} alt="Einstein" />
            ) : (
              <img src={userLandscape2} alt="Cleopatre" />
            )}
          </div>
          <div>
            {id == 1 ? (
              <img src={userImage1} alt="Einstein" />
            ) : (
              <img src={userImage2} alt="Cleopatre" />
            )}
          </div>
          <div>
            {profile.firstname} {profile.lastname}
          </div>
          <div>
            {id == 1 ? (
              <p>
                Génie, découvreur de la théorie de la relativité, prix Nobel de
                physique
              </p>
            ) : (
              <p>Reine du Nil, beauté somptueuse, cat loveuse</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
