import Image from "next/image";
import styles from "../layout.module.css";

function Oral() {
  return (
    <div className={styles.content} id="oral-dosagem">
      <h3>Oral</h3>
      <p>Alguns medicamentos disponíveis no Brasil para TH Oral:</p>
      <ul>
        <li>Primogyna</li>
        <li>Climene</li>
        <li>Cicloprimogyna</li>
      </ul>
      <p>
        <strong>Importante:</strong> A Cicloprimogyna contém dois tipos de
        comprimidos diferentes: Brancos e Vermelhos (vinho). Os comprimidos
        vermelhos contém{" "}
        <a href="https://pt.wikipedia.org/wiki/Levonorgestrel">
          Levonorgestrel
        </a>
        , que é um contraceptivo de emergência (Pílula do dia seguinte) muito
        forte para mulheres cis e não é interessante para TH. Se você decidir
        usar Cicloprimogyna, tome apenas os comprimidos brancos e jogue fora os
        vermelhos para evitar tomar medicações desnecessárias que podem ter
        efeitos colaterais negativos.
      </p>
      <h4>Dose:</h4>
      <ul>
        <li>
          Entre 4mg e 8mg de estradiol por dia + Bloqueador de testosterona.
        </li>
      </ul>
      <p>
        Se precisar de tomar mais de um comprimido por dia para alcançar a dose
        adequada, tome todos de uma vez, sempre no mesmo horário.
      </p>
      <span>
        Comece com 4mg por dia. <ExameSangueAviso via="oral (Comprimidos)" />
      </span>
    </div>
  );
}

function Adesivo() {
  return (
    <div className={styles.content} id="adesivo-dosagem">
      <h3>Adesivo</h3>
      <p>Opções para adesivos de estradiol:</p>
      <ul>
        <li>Estradot</li>
      </ul>
      <p>
        Existem outras opções de adesivos que contém{" "}
        <a href="https://pt.wikipedia.org/wiki/Noretisterona">
          Acetato de Noretisterona
        </a>
        , um contraceptivo que não é interessante para TH. Se você encontrar
        outras opções de adesivos, confira que eles não tem Noretisterona antes
        de comprar!
      </p>
      <h4>Dose:</h4>
      <ul>
        <li>Entre 100μg e 400μg por dia + Bloqueador de Testosterona.</li>
      </ul>
      <p>
        Consulte a embalagem e saiba quantos μg de estradiol o adesivo libera
        por dia. Se o adesivo liberar 50μg por dia, você vai precisar de 2
        adesivos!
      </p>
      <p>
        Consulte a duração dos adesivos e não use por mais tempo do que
        recomenda a embalagem, pois não será efetivo.
      </p>

      <p>Siga as instruções da embalagem ou da bula para aplicar o adesivo.</p>
      <span>
        Comece com 100μg por dia.{" "}
        <ExameSangueAviso via="transdermal (Adesivos)" />
      </span>
    </div>
  );
}

function Gel() {
  return (
    <div className={styles.content} id="gel-dosagem">
      <h3>Gel</h3>
      <p>
        O gel de estradiol mais comum encontrado na maioria das farmácias do
        Brasil é o
      </p>
      <ul>
        <li>Oestrogel</li>
      </ul>
      <h4>Dose:</h4>
      <ul>
        <li>Entre 3mg e 6mg por dia + Bloqueador de Testosterona.</li>
      </ul>

      <p>
        Consulte a embalagem e saiba quantos mg de estradiol cada pump contém.
        Numa calculadora, divida:
      </p>
      <p>Dose diária de estradiol / Estradiol por pump</p>
      <p>
        Se a embalagem indicar 0.6mg de estradiol por pump e você começar com
        uma dose de 3mg por dia, faça 3/0.6 = 5.
      </p>
      <p>
        No caso de uma dose de 3mg por dia e uma embalagem que solta 0.6mg por
        pump, você usará 5 pumps por dia. Aplique sempre no mesmo horário, todos
        os dias.
      </p>
      <p>
        Faça as contas de acordo com o que a embalagem que <strong>você</strong>{" "}
        comprou e ajuste.
      </p>

      <span>
        Comece com 3mg por dia. <ExameSangueAviso via="transdermal (Gel)" />
      </span>

      <h3>Aplicação do gel</h3>
      <Image
        src="/Aplicacao_gel.png"
        alt="aplicação gel"
        width={187}
        height={487}
      ></Image>
      <p>
        Assim como na imagem, aplique gel na parte externa dos braços ou na
        parte interna superior das coxas.
      </p>
      <p>
        Se for mais cômodo, você pode espalhar o gel em dois ou mais locais de
        aplicação dif=erentes quando for usar.
      </p>
      <p>
        <strong>Importante:</strong> Você deve <strong>SEMPRE</strong> tomar
        banho antes de aplicar o gel e, se possível, depile a(s) área(s) de
        aplicação. Sujeira, impurezas, suor e pelos podem diminuir a absorção do
        gel pela sua pele.
      </p>
    </div>
  );
}

function Injecao() {
  return (
    <div className={styles.content} id="injecao-dosagem">
      <h3>Injeção IM (Intramuscular)</h3>
      <p>
        Só há uma opção de medicamento injetável disponível nas farmácias
        brasileiras:
      </p>
      <ul>
        <li>Enantato de Estradiol 10mg + Algestona Acetofenida 150mg</li>
      </ul>
      <p>Alguns nomes populares para essa mistura são:</p>
      <ul>
        <li>Perlutan</li>
        <li>Perlumes</li>
      </ul>
      <h4>Dose:</h4>
      <ul>
        <li>10mg a cada 14 dias; OU</li>
        <li>3mg a cada 7 dias.</li>
      </ul>
      <p>
        (Dosagens referentes à uma ampola com 10mg Enantato de estradiol + 150mg
        Algestona Acetofenida)
      </p>
      <p>
        A TH feita com injeções <strong>NÃO</strong> precisa de bloqueadores de
        Testosterona! A Algestona Acetofenida já age como um bloqueador de
        Testosterona, de forma que seus níveis se reduzam para os que buscamos
        nos outros métodos com uso de bloqueadores.
      </p>
      <strong>
        Não tome bloqueadores de testosterona se você fizer TH com medicamentos
        injetáveis.
      </strong>
      <p>
        Para aprender a como realizar a aplicação em si mesma, consulte o{" "}
        <a href="/manual-aplicacao">Manual de Aplicação</a>!
      </p>
      <br />
      <ExameSangueAviso via="injetável" />
    </div>
  );
}

function ExameSangueAviso(props: { via: string }) {
  return (
    <>
      <span>
        Faça exames de sangue após 3 meses de uso e faça o{" "}
        <a href="/reajuste">reajuste de dose</a> se necessário.
      </span>
      <p>
        Consulte os <a href="/exame-sangue">exames de sangue</a> que você deve
        fazer se escolher a TH pela via {props.via}
      </p>
    </>
  );
}

export default function Estradiol() {
  return (
    <>
      <h2>Estradiol</h2>

      <Oral />
      <Adesivo />
      <Gel />
      <Injecao />
    </>
  );
}
