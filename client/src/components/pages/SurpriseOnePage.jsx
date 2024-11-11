import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';
import axios from 'axios';

export default function CoffeeOneCard({ user }) {
//   const navigate = useNavigate();
  const [surprise, setSurprise] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });
  //   const [myBalance, setMyBalance] = useState(user.balance)
  const { surpriseId } = useParams();

  // buy
  const updateHandler = async (event, surpriseId) => {
    try {
      //   const qwe = surprise.prise
      //   setMyBalance(qwe)

      //   if (user.balance < surprise.price) {
      //     alert('недостаточно средств');
      //     return;
      //   }

      await axiosInstance.patch(`surprises/onesurprise/${surpriseId}`);
        // alert({surprise.description})
      //   navigate('/');
	  window.location.reload(); // найти другой react способ
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosInstance
      .get(`/surprises/onesurprise/${surpriseId}`)
      .then((res) => setSurprise(res.data));
  }, []);

  return (
    <>
      <Card>
        <Row>
          {/* <img src="{surprise.image}" alt="img" /> */}
          <Card.Img variant="top" src={surprise.image} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title>{surprise.name}</Card.Title>
            {user?.data?.id === surprise.userId && (
              <Card.Text>{surprise.description}</Card.Text>
            )}

            <Card.Title>{surprise.price}</Card.Title>
            <Card.Text>
              {surprise.userId === null
                ? 'Доступно к покупке'
                : `Владелец: ${user?.data?.name}`}
            </Card.Text>

            <Button variant="info">
              <Link to={'/'}>Назад</Link>
            </Button>

            {user.status === 'logged' && (
              <Button
                onClick={(event) => {
                  updateHandler(event, surprise.id);
                }}
                variant="danger"
              >
                Приобрести
              </Button>
            )}
          </Card.Body>
        </Row>
      </Card>
    </>
  );
}
