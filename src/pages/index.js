import * as React from "react";

import Layout from "../components/Layout/Layout";

import * as styles from "./index.module.css";
// import logo from "./../images/logo-hero.png";

const IndexPage = () => {
  return (
    <Layout pageTitle="Czarny Bez - strona główna">
      <main>
        <div className={styles.hero}>
          {/* <img src={logo} /> */}

          {/* <p>Gramy w waszym mieście już w najbliższą niedzielę</p> */}
        </div>
        <div className={styles.container}>
          <p>
            ... planetę okaleczyły kataklizmy o nieznanych wcześniej rozmiarach.
            Wypracowane modele społeczne i wszelakie wartości przestały istnieć.
            Organizmy państwowe uległy destrukcji. Cywilizacja jaką znamy
            upadła. Nastąpiła era chaosu … Na wschodzie Europy, której obszar
            jeszcze nie ostygł pamiętając katastrofalny w skutkach konflikt
            międzynarodowy, krwawą wojnę religijną, śmiertelną zarazę i upadek
            człowieczeństwa tworzą się nowe formy ludzkich skupisk. Nasz rodzaj
            przetrwał a planeta się odradza. Potrzeba bezpieczeństwa i tęsknota
            za stabilizacją zaprowadziła nową społeczność do rzeczywistości, w
            której jak w zwierciadle odbijają się echa pradawnych tradycji i
            zwyczajów. Przestrzeni, gdzie namacalnie znów czują siłę potężnych
            odwiecznych bogów. Do czasów burzliwych wieców, plemiennych rodowych
            władców, świętych lasów i pradawnych gór. Do cybernetycznej epoki
            ognia, wody i żelaza, , ale też powrotu więzi międzyludzkich i
            bliskości z naturą. Życie w równowadze z przyrodą to jedyna szansa,
            żeby zaczęli od nowa. Czas zatoczył krąg. Przyszłość i przeszłość
            jest tu i teraz... .. to wtedy na gruzach cywilizacji u zarania
            nowej odmienionej ludzkości zrodził się CZARNY BEZ ...
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
