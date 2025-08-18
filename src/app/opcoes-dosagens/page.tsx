import styles from "../layout.module.css";
import Dosagens from "./dosagens";
import Medicamentos from "./medicamentos";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Quais são as suas opções de TH transfeminina no Brasil?</h1>
        <p><strong>NENHUM dos medicamentos mencionados nessa lista necessitam de receita médica para serem comprados em qualquer farmácia.</strong></p>
        {/* <Medicamentos /> */}
				<Dosagens />
      </main>
    </div>
  );
}
