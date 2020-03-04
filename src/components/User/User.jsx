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

const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
            {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,99,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                  hoverBorderColor: 'rgba(255,99,132,1)',
                  data: [65, 59, 80, 81, 56, 55, 40]
            }
      ]
};

const DICTIONARY_TYPE_PERSON = {
      "1": 'Teacher',
      "2": 'Student',
      //TODO: add more type of persons
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
                              data={data}
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
