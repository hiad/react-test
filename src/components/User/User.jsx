import React from 'react';
import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
} from 'reactstrap';
import { useModal } from "react-modal-hook";
import { Bar } from 'react-chartjs-2';


const arrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomArray = () => arrayValues.map(() => Math.random() * arrayValues.length);
const gettingData = () => ({
      labels: ['', '', '', '', '', '', ''],
      datasets: [
            {
                  label: 'Show Dates Here',
                  backgroundColor: 'rgba(0,230,200,1)',
                  borderColor: 'rgba(0,102,0,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(0,230,132,1)',
                  hoverBorderColor: 'rgba(0,102,0,1)',
                  data: randomArray(),
            }
      ]
});

const DICTIONARY_TYPE_PERSON = {
      //TODO: add more type of persons
      "1": 'Teacher',
      "2": 'Student',
};

const User = ({
      className,
      id,
      name,
      age,
      personTypeId,
}) => {
      const typeString = DICTIONARY_TYPE_PERSON[personTypeId];

      const [showModal, hideModal] = useModal(() => (
            <Modal isOpen className={className}>
                  <ModalHeader toggle={hideModal}>{name} {age}</ModalHeader>
                  <ModalBody>
                        <Bar
                              data={gettingData()}
                              width={500}
                              height={500}
                              options={{
                                    maintainAspectRatio: false
                              }}
                        />
                  </ModalBody>
                  <ModalFooter>
                        <Button color="secondary" onClick={hideModal}>Ok</Button>
                  </ModalFooter>
            </Modal>
      ));

      return (
            <tr
                  className={className}
            >
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>
                        <Button>Edit</Button>
                        {' '}
                        <Button>Delete</Button>
                  </td>
                  <td>
                        {typeString === 'Student' && <Button onClick={showModal}>X</Button>}
                  </td>
            </tr>
      );
};

export default User;
