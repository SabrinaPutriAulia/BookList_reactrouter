import {
  background,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../modules/fetch";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, [window.localStorage.getItem("token")]);

  return (
    <Flex
      w="full"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="#6F4FD4"
      boxShadow="lg"
      mb={5}
    >
      <Link to="/">
        <Flex align="center" ml={5} cursor="pointer">
          <Image
            w={8}
            mr={3}
            src="https://www.nemaweb.org/images/library/reports-pubs-01.png"
          ></Image>
          <Text fontSize="2xl" fontWeight="bold">
            Library
          </Text>
        </Flex>
      </Link>
      <HStack>
        {!isLogin && (
          <Link to="/register">
            <Button width="6rem" borderRadius="50" bgColor="white">
              Register
            </Button>
          </Link>
        )}
        {!isLogin && (
          <Link to="/login">
            <Button
              width="6rem"
              borderRadius="50"
              color="white"
              bgColor="#6F4FD4"
            >
              Login
            </Button>
          </Link>
        )}
        {isLogin && (
          <Link to="/newbook">
            <Button bgColor="white" borderRadius={50}>
              Create New Book
            </Button>
          </Link>
        )}
        {isLogin && (
          <Button
            colorScheme="red"
            borderRadius={50}
            width="6rem"
            onClick={() => {
              window.localStorage.removeItem("token");
              setIsLogin(false);
              navigate("/");
            }}
          >
            Logout
          </Button>
        )}
      </HStack>
      {/* 
      <Modal isOpen={isOpen} onClose={onClose}>
        <form
          id="login-form"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const token = await loginUser(
                e.target.email.value,
                e.target.password.value
              );
              window.localStorage.setItem("token", token.token);
              navigate("/");
              onClose();
            } catch (err) {
              toast({
                title: "Error",
                description: err.message,
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </FormControl>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" form="login-form" colorScheme="blue" mr={3}>
                Login
              </Button>
              <Link to="/register" onClick={onClose}>
                <Button variant="ghost">
                  Doesn't Have Account? Click here
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal> */}
    </Flex>
  );
};

export default Navbar;
