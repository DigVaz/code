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
       <p1>.</p1>
        <p>TOKEN STAY</p>
        <p2>Your Stay, Your Token, Your Way</p2>
        <p1>.</p1>
      </div>
      <ul>
        <li><a class="active" href="/">Inicio</a></li>
        <li><a href="/recomendaciones">Recomendaciones</a></li>
        <li><a href="/busqueda">Busqueda</a></li>
        <li1><a href="/info">Informacion</a></li1>
      </ul>
      
      <h></h>
      <p5></p5>
    </MainLayout>
  );
}
