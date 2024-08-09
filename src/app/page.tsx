import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "../../components/Header/Header";
import MainPage from "../../components/MainPage/MainPage";

export default function Home() {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
}
