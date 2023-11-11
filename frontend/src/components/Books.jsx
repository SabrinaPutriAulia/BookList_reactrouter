import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card
        direction={{ base: "column", sm: "row" }}
        cursor="pointer"
        overflow={"hidden"}
        width={"21rem"}
        height={"15rem"}
        mb={4}
      >
        <Image
          src={`http://localhost:8000/${image}`}
          alt={title}
          maxW={{ base: "100%", sm: "180" }}
        />
        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>
            <Text>{author} </Text>
            <Text>{year} </Text>
          </CardBody>

          {/* If you want to add a footer with buttons */}
          <CardFooter>
            <Link to={`/books/${id}`} style={{ textDecoration: "none" }}>
              <Button variant="solid" bg="#6F4FD4" color={"white"}>
                Book Details
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </Link>
  );
}
