import { useState } from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

export function App() {
  const [cardMenuVisibleById, setCardMenuVisibleById] = useState(-1);

  function hideOptionsMenu() {
    setCardMenuVisibleById(-1);
  }

  function showOptionsMenu(id) {
    setCardMenuVisibleById(id);
  }

  return (
    <>
      <Header onClick={hideOptionsMenu} />
      <Main onClick={hideOptionsMenu} showOptionsMenu={showOptionsMenu} cardMenuVisibleById={cardMenuVisibleById} />
      <Footer onClick={hideOptionsMenu} />
    </>
  )
}