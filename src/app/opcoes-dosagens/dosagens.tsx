import Bloqueadores from "./bloqueadores";
import Estradiol from "./estradiol";
import styles from "../layout.module.css";


function NiveisDeEstradiol(){
	return (
		<div className={styles.content} id="niveis-estradiol">
		<p>
		De acordo com o SoC 8, os níveis ideais de Estradiol e Testosterona para os melhores resultados, sem correr riscos desnecessários são:
		</p>
		<ul>
			<li>Estradiol: 100~200 pg/mL</li>
			<li>
			Testosterona: &lt;= 60 ng/dL (Não confunda as unidades de medida!)
			</li>
		</ul>
		</div>
	)
}

function NaoFeminizaMaisMenos(){
	return (
		<div className={styles.content} id="feminiza-mais">
		<h3>
		Não existe medicamento que feminiza mais ou feminiza menos:
		</h3>
		<p>
		Independente de qual é o medicamento que você usa, o objetivo é o mesmo: Deixar os níveis de Estradiol e Testosterona dentro desses intervalos.
		<br />
		O processo de feminização é o seu corpo que faz. O estradiol é apenas a ferramenta que ele usa para isso. Lembre-se!
		</p>
		</div>
	)
}

function Referencias(){
	const titulos = ["Dose baixa", "Dose moderada", "Dose alta", "Dose muito alta"];
	const values = {
		Oral: ['2 mg/dia', '4 mg/dia', '8 mg/dia', '12 mg/dia'],
		Adesivo: ['50-100 μg/dia', '100~200 μg/dia', '200~400 μg/dia', '300~600 μg/dia'],
		Gel: ['1.5 mg/dia', '3 mg/dia', '6 mg/dia', '9 mg/dia'],
		'Injeção I.M': ['1 mg/semana', '2 mg/semana', '4 mg/semana', '6 mg/semana'],
		'Nível médio de estradiol': ['50 pg/mL', '100 pg/mL', '200 pg/mL', '300 pg/mL'],
		'Fase equivalente do ciclo menstrual': ['Folicular', 'Ciclo inteiro', 'Lútea', 'Ovulação']
	  };
	return (
		<div className={styles.content} id="referencias">
		<h3>
		Referência:
		</h3>
		<p>
		As dosagens listadas aqui são referenciadas de uma tabela do Transfemscience. Mais informações sobre esse site estarão no capítulo de referências.
		</p>
		<table>
			<thead>
				<tr>
					<th>Rota</th>
				{titulos.map((value: string) => (
					<th key={value}>{value}</th>
				))}
				</tr>
			</thead>
			<tbody>
				{Object.entries(values).map(([rota, doses]) => (
					<tr key={rota}>
						<td>{rota}</td>
						{doses.map((dose, idx) => (
							<td key={`${rota}-${idx}`}>{dose}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
		</div>
	)
}

export default function Dosagens() {
	return (<section id="dosagens">
		<h2>
			Dosagens
		</h2>

		<NiveisDeEstradiol />
		<NaoFeminizaMaisMenos />
		<Referencias />
		<Estradiol />
		<Bloqueadores />
	</section>)
}
