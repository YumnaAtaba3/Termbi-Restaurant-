import { useState } from "react";
import LoginModal from "../../log-in/components/loginModal";
import RegisterModal from "../../register/components/registerModal";

export default function AuthModalController({ children }) {
  const [modalType, setModalType] = useState(null); // "login" | "register" | null

  const openLogin = () => setModalType("login");
  const openRegister = () => setModalType("register");
  const closeModal = () => setModalType(null);

  return (
    <>
      {/* The section using this controller gets these functions */}
      {children({ openLogin, openRegister })}

      {/* Render modals */}
      {modalType === "login" && (
        <LoginModal
          onClose={closeModal}
          onSwitch={() => setModalType("register")}
        />
      )}

      {modalType === "register" && (
        <RegisterModal
          onClose={closeModal}
          onSwitch={() => setModalType("login")}
        />
      )}
    </>
  );
}
