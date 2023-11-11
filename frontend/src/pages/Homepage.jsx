import { HStack, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";

export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <HStack align="center" p={10}>
      <Wrap spacing={5}>
        {books?.books?.map((book) => (
          <WrapItem>
            <Books key={`${book.id} ${book.title}`} {...book} />
          </WrapItem>
        ))}
      </Wrap>
    </HStack>
  );
}
