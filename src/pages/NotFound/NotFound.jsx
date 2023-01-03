import Header from "components/Header/Header";
import { NotFound404 } from "./NotFound.styled";

export default function NotFound() {
  return (
    <>
      <Header text='404 Not Found' />
      <NotFound404 />
    </>
  );
}