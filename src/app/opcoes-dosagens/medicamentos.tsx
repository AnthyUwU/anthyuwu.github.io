import styles from "../layout.module.css";


function BloqueadoresTestosterona() {
	return (
	  <div className={styles.content}>
		<h3>Bloqueadores de Testosterona</h3>
		<p>
		  No brasil, temos duas opções de bloqueadores de testosterona
		  (Antiandrógeno)
		</p>
		<ul>
		  <li>Acetato de ciproterona</li>
		  <li>Espironolactona</li>
		</ul>
	  </div>
	);
  }
  
  function Oral() {
	return (
	  <div className={styles.content}>
		<h3>Oral</h3>
		<p>Alguns medicamentos disponíveis no Brasil para TH Oral:</p>
		<ul>
		  <li>Primogyna</li>
		  <li>Climene</li>
		  <li>Cicloprimogyna</li>
		</ul>
		<p>
		  <strong>Importante:</strong>A Cicloprimogyna contém dois tipos de
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
	  </div>
	);
  }
  
  function Adesivos() {
	return (
	  <div className={styles.content}>
		<h3>Transdermal (Adesivos)</h3>
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
	  </div>
	);
  }

  function Gel() {
	return (
		<div className={styles.content}>
			<h3>Transdermal (Gel)</h3>
			<p>O gel de estradiol mais comum encontrado na maioria das farmácias do Brasil é o</p>
			<ul>
				<li>Oestrogel</li>
			</ul>
		</div>
	)
  }
  
  function Injetavel() {
	return (
	  <div className={styles.content}>
		<h3>Injetável</h3>
		<p>
		  Só há uma opção de medicamento injetável disponível nas farmácias
		  brasileiras:
		</p>
		<ul>
		  <li>Enantato de Estradiol 10mg + Algestona Acetofenida 150mg</li>
		</ul>
			  <p>
				  Alguns nomes populares para essa mistura são:
			  </p>
			  <ul>
				  <li>Perlutan</li>
				  <li>Perlumes</li>
			  </ul>
	  </div>
	);
  }
  
export default function Medicamentos() {
	return (
	  <section id="medicamentos">
		<h2>Medicamentos: </h2>
		<BloqueadoresTestosterona />
		<Oral />
		<Gel />
		<Adesivos />
		<Injetavel />
	  </section>
	);
  }