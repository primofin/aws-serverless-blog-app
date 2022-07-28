import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';

import Article from '../components/Article';
import Header from '../components/Header';

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const imgSrc = user?.picture ?? 'https://via.placeholder.com/140.png/';
  return (
    <div className="profile flex-center">
      <Header hasSubHeading={false} />
      <div className="profile__content-wrapper flex-center">
        <div className="profile__bio-wrapper">
          <div className="profile__header">
            <img src={imgSrc} alt="cover image" className="rounded"></img>
            <h3>{user?.username}</h3>
          </div>

          <div className="profile__info">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos pariatur eos
              sunt sequi autem explicabo aut veritatis sapiente at velit iure ratione optio iste
              quas amet aspernatur tempora, ab minima repudiandae vel et odio ullam dolore vitae.
              Tempore ratione nesciunt numquam temporibus explicabo, nemo recusandae sunt atque
              iusto non maiores.
            </p>
          </div>
        </div>
        <div className="profile__work flex-center">
          <Article></Article>
          <Article></Article>
        </div>
      </div>
    </div>
  );
};

export default Profile;
