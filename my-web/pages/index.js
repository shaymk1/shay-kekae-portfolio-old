import Head from "next/head";
import styles from "../styles/Home.module.css";
// import Image from "next/image";
import HomePage from "./homePage";
import Navbar from "../components/Navbar";
import Services from "./services";
import Works from "./works";
// import Clients from "./clients";
import Contact from "./contact";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Designfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<Navbar />
			<HomePage />
			<Services />
			<Works />
			
			<Contact />
			<Footer />
		</div>
	);
}
