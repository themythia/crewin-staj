import person1 from '../../assets/person1.png';
import person2 from '../../assets/person2.png';
import person3 from '../../assets/person3.png';
import person4 from '../../assets/person4.png';
import person5 from '../../assets/person5.png';
import person6 from '../../assets/person6.png';
import person7 from '../../assets/person7.png';
import person8 from '../../assets/person8.png';

const User = ({ data }) => {
  const images = {
    1: person1,
    2: person2,
    3: person3,
    4: person4,
    5: person5,
    6: person6,
    7: person7,
    8: person8,
  };
  return (
    <div className='user'>
      <div className='img-container'>
        <img src={images[data.id]} alt={data.name} />
      </div>
      <span className='name'>{data.name}</span>
      <span>{data.email}</span>
      <span>{data.address.city}</span>
    </div>
  );
};
export default User;
