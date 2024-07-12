"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { data } from "autoprefixer";
import Button from "@/components/Button";
import { useAuth } from "@/components/AuthContext";

export default function Home() {
  const {Login} = useAuth()
  const router = useRouter();
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });
  const [isDisable, setIsDisable] = useState(false);

  const validasi = () => {
    if (dataLogin.password && dataLogin.username) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  useEffect(() => {
    validasi();
  }, [dataLogin]);

  return (
    <section className="p-8 flex-col">
      <h1 className="text-center font-bold text-xl">LOGIN</h1>
      <div className="mt-4">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={dataLogin.username}
            placeholder="Username"
            className="border-1 w-96 p-2 border rounded-md border-gray-500"
            onChange={(e) => {
              setDataLogin({
                ...dataLogin,
                username: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="password"
            value={dataLogin.password}
            placeholder="Password"
            className="border-1 w-96 p-2 border rounded-md border-gray-500"
            onChange={(e) => {
              setDataLogin({
                ...dataLogin,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex justify-center">
          <Button
            text="Masuk"
            className={isDisable ? 'bg-gray-500' : ""}
            disabled={isDisable}
            onClick={() => {
              router.push("/Todo");
              alert("Berhasil Login!");
              Login(true)
            }}
          />
        </div>
      </div>
    </section>
  );
}
