import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';



const Home = () => {

  const categories = [
     {
       id: 1,
       title: 'Hats',
       imageUrl: 'https://m.media-amazon.com/images/I/71sOUQTeuPL._AC_SX425_.jpg',
     },
     {
      id: 1,
      title: 'Jackets',
      imageUrl: 'https://m.media-amazon.com/images/I/61udB2O+81L._AC_SX679_.jpg',
    },
    {
      id: 1,
      title: 'Sneakers',
      imageUrl: 'https://m.media-amazon.com/images/I/711iawVLkyL._AC_UL400_.jpg',
    },
    {
      id: 1,
      title: 'Womens',
      imageUrl: 'https://i.insider.com/59b300dcf7f1f625008b4761?width=700.jpg',
    },
    {
      id: 1,
      title: 'Mens',
      imageUrl: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8260073/2019/5/28/392d72cb-6068-4e54-876f-b1d98da983db1559020499206-Roadster-Men-Maroon--Navy-Blue-Colourblocked-Round-Neck-T-sh-1.jpg'
    },
  ]

  return (
    <div>
      <Directory categories={categories}/>
      <Outlet />
    </div>
  );
}

export default Home;
