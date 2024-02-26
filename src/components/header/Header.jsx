import { HiOutlineMenu } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import icone from "../../assets/images/icone-4x.png";
import InputHeader from "../inputHeader/InputHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
// ! consertar isso
function ButtonsLoginRegister({ handleClickPageChange }) {
  return (
    <div className="flex justify-between items-center gap-[1vw]">
      <button
        id="cadastro"
        className="text-stone-500 hidden lg:block font-semibold hover:bg-slate-300 lg:hover:bg-transparent text-sm pl-3 pr-3 min-w-[30px] h-[30px] rounded-md lg:text-white"
        onClick={(element) => handleClickPageChange(element)}
      >
        Cadastre-se
      </button>
      <button
        id="login"
        className="bg-blue-700 hidden lg:block rounded-md text-white w-[7vw] h-[30px] text-sm front-bold hover:bg-blue-900 lg:hover:bg-orange-500 lg:bg-orange-500"
        onClick={(element) => handleClickPageChange(element)}
      >
        Entrar
      </button>
      <button className="lg:order-1 ">
        <FaCartShopping className="text-white text-2xl" />
      </button>
    </div>
  );
}

function Header() {
  const navigator = useNavigate();

  const [showMenuHamburguer, setShowMenuHamburguer] = useState(false);

  const handleShowMenuHamburguer = (state) => {
    setShowMenuHamburguer(state);
  };

  const handleClickPageChange = (element) => {
    const PAGE_TARGET = element.target.id;
    navigator(`${PAGE_TARGET}`);
    setShowMenuHamburguer(false);
  };

  return (
    <header className="bg-blue-900 items-center pt-5 pb-5 flex flex-col lg:grid-rows-2 ">
      <div className="flex justify-between flex-col lg:justify-start lg:flex-row  items-center h-20  w-[90vw]">
        <aside
          className={`z-10 w-screen h-screen fixed top-0  bg-slate-100 transition-all duration-300 ease-in-out  ${
            showMenuHamburguer ? "left-0 " : " left-[-100vw]"
          }`}
        >
          <div className="ml-5 mr-5 mt-5">
            <button
              className="mb-2"
              onClick={() => handleShowMenuHamburguer(false)}
            >
              <IoMdClose />
            </button>
            <hr className="mb-3" />
            <nav className="flex flex-col mb-10 text-stone-500">
              <Navbar
                handleClickPageChange={handleClickPageChange}
                className={
                  "font-semibold hover:bg-slate-300 p-2 rounded-md cursor-pointer"
                }
              />
            </nav>
            <hr className="mb-3" />
            <ButtonsLoginRegister
              handleClickPageChange={handleClickPageChange}
            />
          </div>
        </aside>

        <div className="flex w-full justify-between">
          <button
            className="lg:hidden"
            onClick={() => handleShowMenuHamburguer(true)}
          >
            <HiOutlineMenu className="text-white text-2xl" />
          </button>
          <div className=" lg:mr-[20vw]">
            <img
              src={icone}
              alt=""
              className=" w-[71.56px] h-[28px] object-cover "
            />
          </div>
          <div className=" hidden lg:block order-1 mt-3 lg:mt-0 lg:order-0 grow w-[38vw] max-w-[550px] lg:mr-[2vw]">
            <InputHeader />
          </div>
          <div className="lg:order-1  ">
            <ButtonsLoginRegister
              handleClickPageChange={handleClickPageChange}
            />
          </div>
        </div>
        <div className=" order-1 lg:hidden mt-3 lg:mt-0 w-full lg:order-0 grow max-w-[550px] lg:mr-[2vw]">
            <InputHeader />
          </div>
      </div>
      <div className="mt-2 lg:flex text-white gap-5 hidden">
        <Navbar
          handleClickPageChange={handleClickPageChange}
          className={"font-semibold  p-2 rounded-md cursor-pointer"}
        />
      </div>
    </header>
  );
}

export default Header;
