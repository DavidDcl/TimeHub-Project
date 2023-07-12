import { Link } from "react-router-dom";

const Post = ({ post, setRefresh, refresh }) => {
  const handleDelete = () => {
    fetch(`http://localhost:8000/api/posts/${post.id}`, {
      method: "DELETE",
    });
    setRefresh(!refresh);
  };
  return (
    <div className="flex flex-col rounded-lg border-2 border-primary mx-3 mb-5">
      <div className="flex items-center gap-3 ml-5 mt-5">
        <img
          className="rounded-full w-12 h-12"
          src={`/${post.uid}.png`}
          alt={`${post.firstname}-profile-picture`}
        />
        <div>
          <Link
            to={`/profile/${post.uid}`}
            className="text-sm md:text-lg mr-10"
          />
          <p>
            {post.firstname} -@{post.nickname}
          </p>
          <p className="text-xs md:text-base">Il y a {2023 - post.era} ans</p>
        </div>
      </div>
      <p className="mx-5 my-5 md:text-xl">{post.content}</p>
      <div className="flex items-center justify-between bg-primary">
        <div className="flex gap-3 pl-3 py-1.5 ">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M8.5 0C3.836 0 0 3.4342 0 7.72505C0 10.2148 1.32016 12.4109 3.31199 13.8155C3.30909 13.8987 3.31199 14.0274 3.20777 14.433C3.07893 14.934 2.82417 15.6438 2.29292 16.4309L1.91076 16.9878L2.57084 16.9999C4.85942 17.0105 6.18537 15.438 6.39237 15.1837C7.06838 15.3411 7.77188 15.4501 8.5 15.4501C13.1626 15.4501 17 12.0159 17 7.72505C17 3.4342 13.1626 0 8.5 0ZM8.5 0.726493C12.8412 0.726493 16.3052 3.88523 16.3052 7.72505C16.3052 11.5649 12.8412 14.7236 8.5 14.7236C7.75741 14.7236 7.03653 14.6298 6.35763 14.4572L6.14918 14.4088L6.01022 14.5904C6.01022 14.5904 4.93903 15.8527 3.23093 16.1524C3.53925 15.5742 3.77376 15.0369 3.87943 14.6267C4.02708 14.0531 4.02997 13.6581 4.02997 13.6581V13.4643L3.86785 13.3554C1.93103 12.0719 0.694823 10.0271 0.694823 7.72505C0.694823 3.88523 4.15736 0.726493 8.5 0.726493Z"
                fill="black"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
            >
              <path
                d="M21.7461 11.7095C21.7461 11.3548 21.6654 11.0135 21.5104 10.7049C22.0211 10.2975 22.3265 9.66465 22.3265 8.97777C22.3265 7.77777 21.393 6.80155 20.2457 6.80155H14.6118C15.0971 5.50378 15.3615 3.92869 15.3615 2.30021C15.3615 1.26758 14.5582 0.42749 13.5709 0.42749C12.5836 0.42749 11.7804 1.26758 11.7804 2.30021C11.7804 5.9912 9.31862 8.7531 5.65457 9.17275C5.62944 9.17563 5.60538 9.18149 5.58242 9.18961C5.34151 8.96206 5.02252 8.82318 4.67306 8.82318H1.95715C1.20837 8.82318 0.599197 9.46031 0.599197 10.2435V16.9898C0.599197 17.7729 1.20837 18.41 1.95715 18.41H4.67306C5.08736 18.41 5.45868 18.2148 5.70799 17.9078C6.57679 18.0404 7.13996 18.331 7.68416 18.6127C8.38367 18.9748 9.10704 19.3493 10.3787 19.3493H18.5045C19.6519 19.3493 20.5852 18.373 20.5852 17.1731C20.5852 16.8184 20.5046 16.477 20.3496 16.1684C20.8603 15.761 21.1656 15.1282 21.1656 14.4413C21.1656 14.0866 21.085 13.7452 20.93 13.4367C21.4407 13.0292 21.7461 12.3964 21.7461 11.7095ZM20.3558 12.9831H19.7803C19.5928 12.9831 19.4408 13.1421 19.4408 13.3382C19.4408 13.5343 19.5928 13.6933 19.7803 13.6933H20.2878C20.4177 13.9196 20.4867 14.1747 20.4867 14.4413C20.4867 14.9786 20.2083 15.4664 19.7583 15.7248H19.141C18.9535 15.7248 18.8015 15.8838 18.8015 16.0799C18.8015 16.276 18.9535 16.435 19.141 16.435H19.713C19.8392 16.6588 19.9063 16.9103 19.9063 17.173C19.9063 17.9814 19.2774 18.6391 18.5045 18.6391H10.3787C9.26588 18.6391 8.67245 18.3319 7.98537 17.9762C7.46094 17.7047 6.87206 17.401 6.00954 17.2397C6.02338 17.1585 6.03102 17.0751 6.03102 16.9898V11.6193C6.03102 11.4233 5.87901 11.2643 5.69153 11.2643C5.50404 11.2643 5.35204 11.4233 5.35204 11.6193V16.9898C5.35204 17.3813 5.04743 17.6999 4.67306 17.6999H1.95715C1.58278 17.6999 1.27817 17.3813 1.27817 16.9898V10.2435C1.27817 9.8519 1.58278 9.53332 1.95715 9.53332H4.67306C5.04743 9.53332 5.35204 9.8519 5.35204 10.2435C5.35204 10.4395 5.50404 10.5985 5.69153 10.5985C5.87901 10.5985 6.03102 10.4395 6.03102 10.2435C6.03102 10.1056 6.01179 9.9725 5.97661 9.84636C7.87682 9.57535 9.49104 8.72234 10.6566 7.36917C11.8192 6.01956 12.4594 4.2194 12.4594 2.30021C12.4594 1.65918 12.958 1.13763 13.5709 1.13763C14.1838 1.13763 14.6825 1.65914 14.6825 2.30021C14.6825 4.04471 14.3657 5.71615 13.7905 7.00665C13.7113 7.18436 13.7849 7.39563 13.9548 7.47849C14.0101 7.50548 14.0688 7.51524 14.1256 7.5104C14.1341 7.51107 14.1426 7.51178 14.1513 7.51178H20.2457C21.0186 7.51178 21.6474 8.16946 21.6474 8.97786C21.6474 9.5015 21.3831 9.97822 20.9532 10.2414H20.3177C20.1302 10.2414 19.9782 10.4004 19.9782 10.5965C19.9782 10.7926 20.1302 10.9516 20.3177 10.9516H20.8624C20.996 11.1804 21.067 11.4391 21.067 11.7096C21.0671 12.2401 20.7957 12.7222 20.3558 12.9831Z"
                fill="black"
              />
              <path
                d="M18.5235 12.9832H18.1618C17.9743 12.9832 17.8223 13.1421 17.8223 13.3382C17.8223 13.5343 17.9743 13.6933 18.1618 13.6933H18.5235C18.711 13.6933 18.863 13.5343 18.863 13.3382C18.863 13.1421 18.711 12.9832 18.5235 12.9832Z"
                fill="black"
              />
              <path
                d="M19.141 10.2413H18.7792C18.5917 10.2413 18.4397 10.4003 18.4397 10.5964C18.4397 10.7925 18.5917 10.9515 18.7792 10.9515H19.141C19.3285 10.9515 19.4805 10.7925 19.4805 10.5964C19.4805 10.4003 19.3285 10.2413 19.141 10.2413Z"
                fill="black"
              />
              <path
                d="M17.906 15.7249H17.5443C17.3568 15.7249 17.2048 15.8838 17.2048 16.0799C17.2048 16.276 17.3568 16.435 17.5443 16.435H17.906C18.0935 16.435 18.2455 16.276 18.2455 16.0799C18.2455 15.8838 18.0936 15.7249 17.906 15.7249Z"
                fill="black"
              />
              <path
                d="M3.99409 10.2434C3.61972 10.2434 3.31511 10.562 3.31511 10.9535C3.31511 11.3451 3.61972 11.6637 3.99409 11.6637C4.36846 11.6637 4.67306 11.3451 4.67306 10.9535C4.67306 10.562 4.36846 10.2434 3.99409 10.2434Z"
                fill="black"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clipPath="url(#clip0_17_45)">
                <path
                  d="M12.8333 22H9.99167C7.975 22 6.41667 20.35 6.41667 18.3333V13.75H0V3.66667C0 1.65 1.65 0 3.66667 0H22V12.8333H14.6667C13.6583 12.8333 12.8333 13.5667 12.8333 14.575V22ZM1.83333 11.9167H8.25V18.3333C8.25 19.3417 8.98333 20.1667 9.99167 20.1667H11V14.575C11 12.5583 12.65 11 14.6667 11V1.83333H3.66667C2.65833 1.83333 1.83333 2.65833 1.83333 3.66667V11.9167ZM16.5 11H20.1667V1.83333H16.5V11Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_45">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <button onClick={handleDelete}>
          <svg
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Post;
