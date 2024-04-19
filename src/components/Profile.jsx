export default function Profile({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) {
  return (
    <div>
      <div>
        <img
          src={avatar}
          alt="User avatar"
        />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>1000</span>
        </li>
        <li>
          <span>Views</span>
          <span>2000</span>
        </li>
        <li>
          <span>Likes</span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  );
}
