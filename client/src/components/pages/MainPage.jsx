import React, { useEffect, useState } from 'react';
import SurpriseCard from '../ui/SurpriseCard';
import Row from 'react-bootstrap/Row';

export default function MainPage() {
  const [currentSurprises, setCurrentSurprises] = useState([]);

  const getAllSurprises = async () => {
    try {
      const response = await fetch('/api/surprises');
      if (response.status === 200) {
        const surprisesFromDb = await response.json();
        setCurrentSurprises(surprisesFromDb);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSurprises();
  }, []);

  return (
    <Row>
      {currentSurprises.map((el) => (
        <SurpriseCard key={el.id} surprise={el} />
      ))}
    </Row>
  );
}
