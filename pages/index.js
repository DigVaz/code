import MainLayout from "@/components/layouts/MainLayout";
import { useState } from "react";
import { AuthContext } from "@/components/AuthProvider";
import { useContext } from "react";


export default function Home() {
  const { publicKey, signIn, sendTransaction } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <MainLayout>
      <div>
      
        <p>TOKEN STAY</p>
        <p2>Your Stay, Your Token, Your Way</p2>
        <br></br>
      </div>
      <ul>
        <li><a class="active" href="/">Inicio</a></li>
        <li><a href="/recomendaciones">Recomendaciones</a></li>
        <li><a href="/busqueda">Busqueda</a></li>
        <li1><a href="/info">Informacion</a></li1>
      </ul>
      <br></br>
      <br></br>
      <br></br>
      <div2 class="section">
    <h2>Welcome to Token Stay</h2>
  </div2>

  <div2 class="section">
    <h2>Introduction</h2>
    <p9>
      In short, the Solana payment method feature in our service streamlines the booking, payment, and stay process, giving users a more efficient and secure experience.
      Additionally, it takes advantage of the speed and security inherent to Solana as a cryptocurrency to ensure transactions are fast, reliable, and affordable. This benefits both users and accommodation providers by simplifying cash flow and offering greater convenience in financial transactions within the hotel and lodging sector.<br></br>
    </p9> <br></br>
  </div2>

  <div2 class="section">
    <h2>Problem 1: Insecure Key Delivery</h2>
    <p9>
      One of the primary issues is the delivery of keys. Both for hosts and guests, the process of giving and receiving keys can be insecure.
      Hosts are often compelled to provide copies of their keys or leave them in easily accessible places. This presents a clear risk of theft or damage to the property.<br></br>
    </p9> <br></br>
  </div2>

  <div2 class="section">
    <h2>Problem 2: Inefficiency in Schedule Coordination</h2>
    <p9>
      Another challenge is the inefficiency in schedule coordination. Hosts and guests may have complex schedules that do not align.
      This can result in long waiting times, check-in delays, and the loss of valuable time for both parties.<br></br>
    </p9> 
  </div2>

    <div2 class="section">
    <br></br>
    <h2>Solution</h2>
    
    <p9>
      Fortunately, there is a promising solution to address these issues.
      We are working on developing a platform that utilizes advanced security technology and scheduling tools to ensure a safe and efficient delivery of access codes for home entry, replacing the role of traditional keys and their associated inconveniences.
      Our platform will protect the privacy and property of hosts while providing a seamless experience for guests.
    </p9>
    </div2>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </MainLayout>
  );
}
