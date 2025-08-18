import styles from "../layout.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Reajuste de Dose</h1>
        <p>
          Se você precisar de ajuda para ajustar sua dose, entre em contato
          comigo no Discord. Meu usuário é anthyuwu. Mande seu pedido de amizade
          e quando eu aceitar, me diga que veio do site!
        </p>
        <p>
          Alternativamente, você pode entrar no meu servidor e pedir ajuda no
          chat de hormonização! Assim, eu ou minha esposa (starpanims) vamos te
          ajudar assim que possível.
        </p>
        <a href="https://discord.gg/tvSDezQGQU">
          https://discord.gg/tvSDezQGQU
        </a>
      </main>
    </div>
  );
}
