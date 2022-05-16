import Head from "next/head";
import Image from "next/image";
import Button from "../src/components/Button";
import SwitchInput from "../src/components/SwitchInput";
import UpperHeader from "../src/components/UpperHeader";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <UpperHeader />
      <div className="flex items-center flex-col justify-center mt-40">
        <h1 className="text-lg text-center">Configure Page</h1>
        <Button label="Next" href="/brand" />
      </div>
    </div>
  );
}
