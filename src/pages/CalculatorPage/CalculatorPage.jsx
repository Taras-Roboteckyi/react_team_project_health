import React, { useState } from 'react';
import { Container } from '../../components/container';
import { DailyCaloriesForm } from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import { DailyCalorieIntake } from '../../components/DailyCalorieIntake/DailyCalorieIntake';
import Modal from '../../components/modal/Modal';
import SideBar from '../../components/SideBar/SideBar';
import { StyledWrapper } from './CalculatorPage.styled';

export const CalculatorPage = () => {
  const [modalData, setModalData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onFormSubmit = data => {
    const exampleData = {
      calories: 2800,
      products: ['Борошняні вироби', 'Молоко', "Червоне м'ясо", 'Копченості'],
    };
    setModalData(exampleData);
  };

  const toggleModal = () => {
    setIsOpenModal(prevValue => !prevValue);
  };

  return (
    <main>
      <Container>
        <StyledWrapper>
          <DailyCaloriesForm onFormSubmit={onFormSubmit} onOpen={toggleModal} />
          {isOpenModal && (
            <Modal onClose={toggleModal}>
              <DailyCalorieIntake data={modalData} onClose={toggleModal} />
            </Modal>
          )}
        </StyledWrapper>
        <SideBar />
      </Container>
    </main>
  );
};
