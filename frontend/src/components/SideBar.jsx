import { Link } from "react-router-dom";
import { useGlitch } from "react-powerglitch";

function SideBar() {
  const glitch = useGlitch();
  return (
    <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-3 lg:mx-3 lg:pr-3 lg:pt-3">
      <div className="flex flex-col gap-3 h-1/2">
        <span ref={glitch.ref}>
          <Link to="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 rounded-full text-secondary p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <p>Accueil</p>
          </Link>
        </span>
        <span ref={glitch.ref}>
          <Link to="/chatpage" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 rounded-full text-secondary p-1"
              fill="none"
              viewBox="-1 -2 25 25"
              stroke="currentColor"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M11.5 0C5.20703 0 0.03125 4.07711 0.03125 9.17125C0.03125 12.1271 1.8125 14.7344 4.5 16.4019C4.49609 16.5007 4.5 16.6534 4.35938 17.135C4.18555 17.7298 3.8418 18.5725 3.125 19.5069L2.60938 20.1681L3.5 20.1825C6.58789 20.1951 8.37695 18.3281 8.65625 18.0263C9.56836 18.2131 10.5176 18.3425 11.5 18.3425C17.791 18.3425 22.9688 14.2654 22.9688 9.17125C22.9688 4.07711 17.791 0 11.5 0ZM11.5 0.8625C17.3574 0.8625 22.0312 4.61258 22.0312 9.17125C22.0312 13.7299 17.3574 17.48 11.5 17.48C10.498 17.48 9.52539 17.3686 8.60938 17.1637L8.32812 17.1063L8.14062 17.3219C8.14062 17.3219 6.69531 18.8205 4.39062 19.1763C4.80664 18.4898 5.12305 17.852 5.26562 17.365C5.46484 16.684 5.46875 16.215 5.46875 16.215V15.985L5.25 15.8556C2.63672 14.3319 0.96875 11.9043 0.96875 9.17125C0.96875 4.61258 5.64062 0.8625 11.5 0.8625Z"
                fill="black"
              />
            </svg>
            <p>Messages</p>
          </Link>
        </span>
        <span ref={glitch.ref}>
          <Link to="/profile/1" className="flex items-center gap-4">
            <img
              className="h-10 w-10"
              src="/public/1.png"
              alt="Albert Einstein"
            />
            <span ref={glitch.ref}>Profil</span>
          </Link>
        </span>
      </div>
      <div className="flex flex-col justify-end  h-1/2 pb-2">
        <Link
          ref={glitch.ref}
          to="/contact"
          className="flex items-center gap-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-10 h-10"
            stroke="hsl(var(--s))"
          >
            <path
              d="M 12 5 L 12 14 L 9 14 C 7.895 14 7 14.895 7 16 C 7 17.105 7.895 18 9 18 L 15 18 L 15 21 L 12 21 L 12 24 L 9 24 C 7.895 24 7 24.895 7 26 C 7 27.105 7.895 28 9 28 L 15 28 L 15 31 L 12 31 L 12 34 L 9 34 C 7.895 34 7 34.895 7 36 C 7 37.105 7.895 38 9 38 L 15 38 L 15 41 L 12 41 L 12 44 L 9 44 C 7.895 44 7 44.895 7 46 C 7 47.105 7.895 48 9 48 L 15 48 L 15 51 L 12 51 L 12 59 L 50 59 C 52.21 59 54 57.21 54 55 L 54 9 C 54 6.79 52.21 5 50 5 L 12 5 z M 35.208984 17.005859 C 36.521953 17.018047 37.820625 17.202109 39.140625 17.599609 C 40.870625 18.129609 42.530313 19.100156 43.820312 20.410156 C 45.120312 21.720156 46.049922 23.299922 46.669922 24.919922 C 47.289922 26.549922 47.609766 28.220859 47.759766 29.880859 C 47.869766 31.530859 47.919531 33.19 47.519531 35 C 47.309531 35.89 47.000156 36.820703 46.410156 37.720703 C 45.820156 38.610703 44.869922 39.489609 43.669922 39.849609 C 42.459922 40.209609 41.300859 40.150625 40.130859 39.640625 C 39.380859 39.300625 38.789844 38.769453 38.339844 38.189453 L 38.070312 38.560547 C 37.160313 39.530547 35.53 40.240234 33.75 40.240234 C 30.2 40.240234 28.269531 37.290547 28.269531 32.310547 C 28.269531 27.180547 31.110938 24.900391 33.960938 24.900391 C 35.480938 24.900391 36.599375 25.450547 37.109375 26.060547 L 37.109375 25.050781 L 40.359375 25.050781 L 40.359375 34.050781 C 40.479375 34.620781 40.649141 35.129063 40.869141 35.539062 C 41.119141 35.979062 41.390859 36.220547 41.630859 36.310547 C 41.840859 36.420547 42.309063 36.440078 42.539062 36.330078 C 42.809063 36.260078 43.050781 36.039687 43.300781 35.679688 C 43.540781 35.299687 43.739375 34.769453 43.859375 34.189453 C 44.119375 33.019453 44.090703 31.600703 43.970703 30.220703 C 43.720703 27.490703 42.810312 24.859688 41.070312 23.179688 C 39.380313 21.479688 36.810938 20.819062 34.210938 21.039062 C 31.680937 21.229063 29.339297 22.459453 27.779297 24.439453 C 26.189297 26.409453 25.399063 29.040234 25.289062 31.740234 C 25.169062 34.470234 25.69 37.200391 27 39.400391 C 28.29 41.600391 30.380312 43.189531 32.820312 43.769531 L 31.919922 47.669922 C 28.409922 46.889922 25.28 44.520703 23.5 41.470703 C 21.7 38.400703 21.11 34.890312 21.25 31.570312 C 21.4 28.230313 22.390625 24.719922 24.640625 21.919922 C 26.850625 19.109922 30.350625 17.290781 33.890625 17.050781 C 34.333125 17.018281 34.771328 17.001797 35.208984 17.005859 z M 34.720703 28.449219 C 32.890703 28.449219 32.279297 30.430547 32.279297 32.310547 C 32.279297 34.650547 33.040156 36.119141 34.410156 36.119141 C 35.280156 36.119141 35.940391 35.920938 36.400391 35.460938 L 36.400391 29.160156 C 35.940391 28.550156 35.430703 28.449219 34.720703 28.449219 z"
              fill="hsl(var(--s))"
            />
          </svg>
          <p>Contact</p>
        </Link>
        <Link ref={glitch.ref} to="/about" className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="w-10 h-10"
            stroke="hsl(var(--s))"
          >
            <path
              d="M 15 3 C 7.82 3 2 7.925 2 14 C 2 16.676142 3.1322222 19.126093 5.0097656 21.033203 C 5.0476793 21.127522 6.0110131 23.606674 3.1582031 26.134766 A 0.5 0.5 0 0 0 3 26.5 A 0.5 0.5 0 0 0 3.5 27 A 0.5 0.5 0 0 0 3.6074219 26.988281 C 6.4832831 26.817905 8.9434573 25.390739 10.445312 24.291016 C 11.864706 24.741137 13.394827 25 15 25 C 22.18 25 28 20.075 28 14 C 28 7.925 22.18 3 15 3 z M 15 7.5 C 15.828 7.5 16.5 8.172 16.5 9 C 16.5 9.828 15.828 10.5 15 10.5 C 14.172 10.5 13.5 9.828 13.5 9 C 13.5 8.172 14.172 7.5 15 7.5 z M 14 13 L 16 13 L 16 20 L 14 20 L 14 13 z"
              fill="hsl(var(--s))"
            />
          </svg>
          <p>A propos</p>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
