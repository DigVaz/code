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
        <br />
        <p>TOKEN STAY</p>
        <h4>Your Stay, Your Token, Your Way</h4>
        <br />
      </div>
      <ul>
        <li><a className="active" href="/">Inicio</a></li>
        <li><a href="/recomendaciones">Recomendaciones</a></li>
        <li><a href="/busqueda">Busqueda</a></li>
        <li><a href="/info">Informacion</a></li>
      </ul>
      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>Nueva York</th>
            <th>Tokio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="/images/NY.jpg" alt="Nueva York" />
              <h5>La ciudad que nunca duerme.</h5>
              <a href="/ny">Mas Informacion</a>
            </td>
            <td>
              <img src="/images/Tokyo.jpg" alt="Tokio" />
              <h5>La capital de Japón, una ciudad vibrante y moderna.</h5>
              <a href="/tokyo">Mas Informacion</a>
            </td>
          </tr>
          <tr>
            <th>Cancún</th>
            <th>París</th>
          </tr>
          <tr>
            <td>
              <img src="/images/Cancun.jpg" alt="Cancún" />
              <h5>Playas paradisíacas en el Caribe mexicano.</h5>
              <a href="/cancun">Mas Informacion</a>
            </td>
            <td>
              <img src="/images/Paris.jpg" alt="París" />
              <h5>La ciudad del amor y la moda.</h5>
              <a href="/paris">Mas Informacion</a>
            </td>
          </tr>
        </tbody>
      </table>
    </MainLayout>
  );
}