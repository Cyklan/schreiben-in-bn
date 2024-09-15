import Link from "next/link";

export const Footer = () => {
  return (
    // TODO: footer muss nach unten >:(
    <footer className="footer bg-base-200 p-10 mt-4">
      <aside>
        <p>
          Petra Ihm-Fahle
          <br />
          Freie Journalistin und Lektorin
        </p>
      </aside>
      <nav>
        <p>
          Lessingstr. 1<br />
          61231 Bad Nauheim
          <br />
          E-Mail:{" "}
          <a href="mailto:petra.ihm-fahle@t-online.de">
            petra.ihm-fahle@t-online.de
          </a>
        </p>
        <p> Steuernummer 016 830 00468, Finanzamt Friedberg (Hessen) </p>
        <p>
          <Link href="/kontakt">Impressum</Link>
        </p>
      </nav>
    </footer>
  );
};
