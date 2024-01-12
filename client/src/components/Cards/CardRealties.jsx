import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { fetchRealties } from '../../redux/realtySlice';
import { deleteRealty } from '../../http/realtyApi';
import { jwtDecode } from 'jwt-decode';
import { Image } from 'react-bootstrap';
import { REALTY_ROUTE } from '../../utils/consts'

export function CardRealties({ id, title, description, price, area, rooms, floor, realty_images }) {
  const { isAuth } = useSelector(state => state.user)
  const dispatch = useDispatch()

  let userRole = ''
  const token = localStorage.getItem('token')

  if (token) {
    const decodedToken = jwtDecode(token)
    userRole = decodedToken.role
  }

  const handleDelete = async (id) => {
    try {
      console.log(id)
      await deleteRealty(id);
      dispatch(fetchRealties({ page: 1 }))
    } catch (error) {
      console.log(error)
    }
  }

  const renderFirstCard = () => {
    if (realty_images && realty_images.length > 0) {
      const firstImage = realty_images[0];

      return (

        <div className='card d-flex flex-column mt-5'>
          <NavLink to={`${REALTY_ROUTE}/selected/${id}`} style={{ textDecoration: 'none', color: 'black' }} >
            <div className='d-flex'>

              <div>
                <Image
                  src={import.meta.env.VITE_REACT_APP_API_URL + firstImage.imageUrl}
                  width={350}
                  alt=""
                />
              </div>
              <div className='d-flex flex-column justify-content-between mt-4 ps-4'>
                <h5>{title}</h5>
                <div>
                  <p>Price: {price}</p>
                  <p>Area: {area}</p>
                </div>
              </div>

            </div>
          </NavLink>
          {isAuth && userRole === 'ADMIN' && ( // Проверка на аутентификацию и роль "admin"
            <button className="btn btn-danger" onClick={() => handleDelete(id)}>
              Delete
            </button>
          )}
        </div>
      );
    } else {
      // В случае отсутствия изображений или realty_images
      return (
        <div className='d-flex justify-content-between'>
          <div>
            <p>{title}</p>
            <p>Price: {price}</p>
            <p>Area: {area}</p>
            <p>Rooms: {rooms}</p>
            <p>Floor: {floor}</p>
            <p>{description}</p>
          </div>
          <div className='d-flex align-self-center'>
            <p >No images available</p>
          </div>
          {isAuth && userRole === 'ADMIN' && ( // Проверка на аутентификацию и роль "admin"
            <button className="btn btn-danger" onClick={() => handleDelete(id)}>
              Delete
            </button>
          )}
        </div>
      );
    }
  };

  // const renderOtherImages = () => {
  //   if (realty_images && realty_images.length > 1) {
  //     const otherImages = realty_images.slice(1); // Exclude the first image
  //     return (
  //       <div className="d-flex">
  //         {otherImages.map((imageData) => (
  //           <div key={imageData.id}>
  //             <Image
  //               src={import.meta.env.VITE_REACT_APP_API_URL + imageData.imageUrl}
  //               width={200}
  //               height={200}
  //               alt=""
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <div className="container">
      {renderFirstCard()}
    </div>
  );
}
