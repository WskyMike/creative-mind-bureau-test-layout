import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Header/Header";
import TopSection from "./TopSection/TopSection";
import MiddleSection from "./MiddleSection/Middlesection";
import BottomSection from "./BottomSection/BottomSection";
import PromoSection from "./PromoSection/PromoSection";
import Footer from "./Footer/Footer";
import ModalContactForm from "./ModalContactForm/ModalContactForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchStubVisible, setIsSearchStubVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchClick = () => setIsSearchStubVisible(true);

  const handleCloseStub = () => setIsSearchStubVisible(false);

  // Убираем скролл при открытии модального окна
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  return (
    <div className="page">
      <Header onSearchClick={handleSearchClick} />
      {isSearchStubVisible ? (
        <div className="search-stub flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-8">Результаты поиска</h1>
          <button
            onClick={handleCloseStub}
            className="px-6 py-3 bg-[#311311] text-white rounded-lg shadow hover:bg-[#B21F24] transition-all cursor-pointer"
          >
            НАЗАД
          </button>
        </div>
      ) : (
        <main className="flex-grow">
          <TopSection onOpenModal={handleOpenModal} />
          <MiddleSection />
          <BottomSection />
          <PromoSection onOpenModal={handleOpenModal} />
        </main>
      )}
      <Footer onOpenModal={handleOpenModal} />

      {isModalOpen && <ModalContactForm onCloseModal={handleCloseModal} />}
    </div>
  );
}

export default App;
