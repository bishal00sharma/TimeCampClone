import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Input,
    Flex,
    Checkbox,
    Box,
    Link,
  } from '@chakra-ui/react'
  import { GoPlus} from 'react-icons/go';
  import { HiOutlineQuestionMarkCircle} from 'react-icons/hi';

export default function UserAdd() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        
        <Button onClick={onOpen} mt="5px" ml="10px"><GoPlus /></Button>
     
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Invite Users</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text color="blue.600">Each person's email address:</Text>
              <hr />
              <Text mt="20px" mb="20px" color="teal.600">Each person will receive an email with their login information and a link to your account</Text>
              <Input bgColor="gray.200" type="text" placeholder="Enter new user here"/>
               <Text fontSize="14px" mt="20px" mb="20px">Project assignment:</Text>
              <Button bgColor="green.400" color="white">Add Project</Button>
              <Box mt="20px">
              <Flex>
              <Text  mr="10px">Which superpowers, if any, should they have?</Text>
              <HiOutlineQuestionMarkCircle fontSize="25px" />
              </Flex>
              <Checkbox mt="10px" colorScheme='green'>Can manage all invoices</Checkbox>
              <Checkbox  colorScheme='green'>Can manage all rates, projects</Checkbox>
              <Checkbox  colorScheme='green'>Can create new projects</Checkbox>

              </Box>
              <Flex mt="10px" justifyContent="space-evenly">
                <Link color='teal.500' href='#'>Invite Users by link</Link>
                <Link color='teal.500' href='#'>Invite multiple at once</Link>
              </Flex>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button bgColor="green.400" color="white" variant='ghost'>Invite User</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }