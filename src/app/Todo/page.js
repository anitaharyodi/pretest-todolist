"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Button from "@/components/Button";
import { useAuth } from "@/components/AuthContext";
import { useRouter } from "next/navigation";

export default function Todo() {
  const router = useRouter();
  const { isLogin } = useAuth();
  const [inputList, setInputList] = useState({
    data: "",
    status: "To Do",
  });
  const [todoList, setTodoList] = useState([]);
  const [isDisable, setIsDisable] = useState(false);

  const submitData = () => {
    setTodoList([...todoList, inputList]);
    setInputList({
      data: "",
      status: "To Do",
    });
  };

  const deleteItem = (index) => {
    const newArray = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    setTodoList(newArray);
  };

  const changeStatus = (index) => {
    const newArray = [...todoList];
    newArray[index].status =
      newArray[index].status === "To Do" ? "Done" : "To Do";
    setTodoList(newArray);
  };

  useEffect(() => {
    if (!inputList.data) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [inputList]);

  useEffect(() => {
    if (!isLogin) {
      router.push("/");
    }
  }, []);

  console.log(todoList);

  return (
    <section className="p-8">
      <h1 className="text-center font-bold text-xl">TODO LIST</h1>
      <div className="mt-4">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={inputList.data}
            placeholder="Apa rencanamu hari ini?"
            className="border-1 w-96 p-2 border border-gray-300 rounded-md"
            onChange={(e) => {
              setInputList({
                ...inputList,
                data: e.target.value,
              });
            }}
          />
          <Button
            text="Tambah"
            disabled={isDisable}
            className={isDisable ? "bg-gray-500" : ""}
            onClick={submitData}
          />
        </div>
        {todoList.map((item, index) => (
          <div key={index} className="border-1 p-4 shadow-md my-2">
            <div className="flex justify-end mb-4">
              <div
                className={`p-1 w-32 rounded-md ${
                  item.status === "To Do" ? "bg-blue-500" : "bg-green-500"
                }`}
              >
                <p className="text-white text-center text-sm">{item.status}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <h3 className="text-black">{item.data}</h3>
              <div className="flex">
                <MdDelete
                  color="red"
                  size={18}
                  onClick={() => deleteItem(index)}
                  className="hover:cursor-pointer"
                />
                {item.status === "To Do" ? (
                  <FaCheck
                    color="green"
                    size={18}
                    className="ml-4 hover:cursor-pointer"
                    onClick={() => changeStatus(index)}
                  />
                ) : (
                  <MdClose
                    color="orange"
                    size={20}
                    className="ml-4 hover:cursor-pointer"
                    onClick={() => changeStatus(index)}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
