import React from 'react';
import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
} from 'reactstrap';
import { useModal } from "react-modal-hook";
import Graph from '../Graph/Graph';
import {
      Link,
} from "react-router-dom";

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

      const onDelete = async (id) => {
            try {
                  const { status } = await fetch('https://my-json-server.typicode.com/sgcis/codetest/persons', {
                        method: 'DELETE',
                        body: id,
                        headers: {
                              "Content-type": "application/json; charset=UTF-8"
                        }
                  });
                  alert("You delete student", id);
                  if (status !== 201) {
                        throw status;
                  }
            } catch (status) {
                  console.log('error', status);
            }
      };

      const [showModal, hideModal] = useModal(() => (
            <Modal isOpen className={className}>
                  <ModalHeader toggle={hideModal}>{name} {age}</ModalHeader>
                  <ModalBody>
                        <Graph personId={name} />
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
                        <Link to={{
                              pathname: "/add",
                              state: {
                                    id,
                                    name,
                                    age,
                                    personTypeId,
                              }
                        }}>
                              <Button>Edit</Button>
                        </Link>
                        {' '}
                        <Button onClick={onDelete}>Delete</Button>
                  </td>
                  <td>
                        {typeString === 'Student' && <Button onClick={showModal}>X</Button>}
                  </td>
            </tr >
      );
};

export default User;
