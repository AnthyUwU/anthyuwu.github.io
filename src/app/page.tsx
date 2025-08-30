import styles from "./layout.module.css";

function OqueE() {
  return (
    <section id="oque-e">
      <h2>O que é?</h2>
      <div className={styles.content}>
        <p>
          A TH é o processo de manipular os hormônios sexuais que seu corpo
          produz, visando chegar a um resultado específico.
        </p>
        <p>
          No caso das pessoas que estão lendo esse texto, o objetivo deve ser
          feminização do rosto e do corpo, além da eliminação de traços
          masculinos.
        </p>
        <p>
          Os dois hormônios que são os principais responsáveis pelo
          desenvolvimento de traços masculinos ou femininos nas pessoas são:
        </p>
        <ul>
          <li>Testosterona (T)</li>
          <li>Estradiol (E2)</li>
        </ul>
      </div>
    </section>
  );
}

function DetalheImportante() {
  return (
    <section id="detalhe-importante">
      <h2>Detalhe importante:</h2>
      <div className={styles.content}>
        <p>
          Normalmente, nós conhecemos os hormônios femininos pelo seu nome mais
          comum, Estrogênio. Contudo, existem vários tipos de estrogênio
          diferentes, que são nomeados com números:
        </p>
        <ol>
          <li>E1 - Estrona</li>
          <li>E2 - Estradiol</li>
          <li>E3 - Estriol</li>
          <li>E4 - Estetrol</li>
        </ol>
        <p>
          O principal hormônio feminizante é o Estradiol (E2). Por isso, vamos
          nos referir a ele neste guia sempre como Estradiol ou E2. Lembre-se
          disso! Os outros tipos de estrogênio não vêm ao caso.
        </p>
        <p>
          Existem formas sintéticas do hormônio Estradiol (E2) que não devem,
          sob hipótese alguma, serem usadas. O maior exemplo disso é o
          Etinilestradiol, recomendação muito popular de endocrinologistas que
          não sabem o que estão fazendo e é conhecida por aumentar em até <strong>20
          vezes</strong> os riscos de trombose (Fonte: <a href="https://sci-hub.se/10.1046/j.1365-2265.1997.2601068.x"> Asscheman et al.</a>)
        </p>
      </div>
    </section>
  );
}
function Como() {
  return (
    <section id="como">
      <h2>Como?</h2>

      <div className={styles.content}>
        <p>
          Nesse guia, nós vamos explorar quais são as opções das mulheres trans
          brasileiras para TH.
        </p>
        <p>
          Esse tratamento envolve elevar os níveis de Estradiol e reduzir os
          níveis de Testosterona no sangue para que fiquem similares aos de uma
          mulher cis.
        </p>
      </div>
    </section>
  );
}

function Porque() {
  return (
    <section id="por-que">
      <h2>Por quê?</h2>
      <div className={styles.content}>
        <p>
          Esse guia foi escrito com base nas recomendações mais recentes da
          Associação Profissional Mundial para Saúde Transgênero (WPATH),
          através do livro Padrões de Cuidados versão 8 (SoC 8) publicado em
          2022.
        </p>
        <p>
          Daqui em frente, eu vou me referir à essa publicação apenas como “SoC
          8”.
        </p>
        <p>
          Minha motivação para escrever esse guia começou com meus próprios
          estudos. Observei, com o tempo, que os profissionais de endocrinologia
          no Brasil em sua maioria (Não são todos, mas é muito rara a exceção)
          não seguem as recomendações mais recentes para o cuidado das pessoas
          trans. Mesmo aqueles que se dizem “Especialistas” no assunto de TH.
        </p>
        <p>
          Muitos deles seguem padrões desatualizados, como as recomendações do
          SoC 6, publicado em 2001 ou anteriores:
        </p>
        <ul>
          <li>
            Pessoas transgênero devem passar pelo “Teste de vida real” antes de
            começar com seus hormônios.
          </li>
          <li>Psicoterapia compulsória</li>
        </ul>
        <p>
          As pessoas trans tinham que transicionar socialmente por pelo menos um
          ano inteiro, além de frequentar sessões de psicoterapia obrigatórias
          antes de receber qualquer tipo de hormônio.
        </p>
        <p>
          Nessa época, a identidade de gênero incongruente com o corpo físico
          ainda era medicamente considerada uma doença mental!
        </p>
        <p>
          O mais comum de acontecer são endocrinologistas receitarem
          medicamentos perigosos, como o Etinilestradiol, ou doses insuficientes
          e muito baixas de hormônios para suas pacientes. (Os medicamentos e
          doses corretos serão listados em outro capítulo)
        </p>
        <p>
          Também vi e presenciei dúzias de pessoas trans passando conselhos
          errados de TH em comunidades no Twitter, no Reddit, no YouTube outros
          lugares baseados apenas em “experiência própria”.
        </p>
        <p>
          Por tudo isso, eu decidi abrir uma comunidade no Discord para passar o
          conhecimento que todas as pessoas trans precisam saber para uma TH
          segura e eficiente usando como base sempre estudos e testes publicados
          oficialmente em revistas médicas.
        </p>
        <p>
          E agora, escrevo esse guia para que sirva como um registro de todas as
          informações que eu consegui ao longo do tempo, para que as pessoas
          aprendam mesmo que não esteja disponível.
        </p>
        <p>
          Ao longo do guia, vou me esforçar para apresentar uma fonte para cada
          afirmação que eu fizer, para explicar o porquê e para que haja uma
          base sólida por trás daquilo que eu falo.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          O que é Terapia Hormonal / Transição hormonal / Terapia de Reposição
          Hormonal / TH?
        </h1>
        <OqueE />
        <DetalheImportante />
        <Como />
        <Porque />
        <div className={styles.inline}>
          <p>Próximo capítulo:</p>
          <a href="/opcoes-dosagens">Medicamentos</a>
        </div>
      </main>
    </div>
  );
}
