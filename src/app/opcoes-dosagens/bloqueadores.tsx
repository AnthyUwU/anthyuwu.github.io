import styles from "../layout.module.css";

function ExameSangueAviso(props: {bloqueador: string}){
	return (
		<>
		<p>
		Consulte os <a href="/exame-sangue">exames de sangue</a> que você deve fazer se escolher a tomar {props.bloqueador}
		</p>
		</>
	)
}

function AcetatoCipro(){
	return (
		<div className={styles.content} id="acetato">
			<h3>Acetato de Ciproterona</h3>
			<ul>
				<li>12.5mg por dia.</li>
			</ul>

			<p>
			A Ciproterona é um potente bloqueador de Testosterona que normalmente é usado para tratar câncer de próstata.
			</p>
			<p>
			A ciproterona é vendida apenas em comprimidos de 50mg. Por isso, será necessário comprar um cortador de comprimidos. Corte cada comprimido em 4 pedaços iguais (equivalendo 12.5mg cada).
			</p>
			<p>
			Tome 12.5mg por dia. Faça exames de sangue após 3 meses de uso e, se necessário, troque para Espironolactona.
			</p>
			<ExameSangueAviso bloqueador="Acetato de Ciproterona."/>
			<p>
				<strong>Importante:</strong>Ao contrário do que dizem muitos profissionais endocrinologistas, estudos publicados em 2021 comprovam que 12.5mg é o suficiente para bloquear a Testosterona de forma ideal em todas as pessoas.
			</p>
			<p>É muito comum que endocrinologistas (até mesmo os que se dizem “especialistas” em TH) recomendem doses altas de 25mg, 50mg ou até mesmo 100mg diárias de ciproterona para suas pacientes.</p>
			<p>
			Doses acima de 12.5mg não garantem maior eficácia no bloqueio de Testosterona, mas aumentam <strong>significativamente</strong> a gravidade e as chances de sofrer efeitos colaterais.
			</p>
			<p>Fonte: <a href="https://pubmed.ncbi.nlm.nih.gov/34125226/">Kuijpers et al., 2021</a></p>
		</div>
	)
}

function Espironolactona(){
	return (
		<div className={styles.content} id="spirogyra">
		<h3>Espironolactona</h3>
		<ul><li>Entre 100mg e 200mg por dia.</li></ul>
		<p>
		A Espironolactona é um bloqueador de testosterona fraco, por isso precisa de doses altas (100mg+) para bloqueá-la adequadamente.
		</p>
		<p>
		A Espironolactona é um diurético, ou seja, você terá vontade de urinar com muito mais frequência enquanto usar esse medicamento. Por isso, <strong>nunca</strong> esqueça de se manter hidratada todos os dias, várias vezes ao dia!
		</p>
		<p>
		Comece com 100mg por dia. Faça exames de sangue após 3 meses de uso e faça o <a href="/reajuste">reajuste de dose</a> se necessário.
		</p>
		<ExameSangueAviso bloqueador="Espironolactona"/>
		</div>
	)
}

function Bicalutamida(){
	return (
		<div className={styles.content} id="bica">
		<h3>Bicalutamida</h3>
		<ul><li>50mg por dia.</li></ul>
		<p>
		A bicalutamida é um bloqueador de Testosterona diferente. Ao invés de impedir seu corpo de produzir Testosterona, ela impede seu corpo de absorver essa Testosterona. Ou seja, seu corpo vai produzir Testosterona, ela vai para o sangue, mas seu corpo não consegue usar.
		</p>
		<p>
		Por isso, quando for fazer exame de sangue, é normal que os níveis de Testosterona no sangue estejam mais altos que antes do início da TH. Não se preocupe!
		</p>
		<p>
		Tome 50mg por dia.
		</p>
		<p>
		Se não tiver o efeito adequado após 3 meses de uso diário, considere trocar para outro bloqueador.
		</p>
		<ExameSangueAviso bloqueador="Bicalutamida" />
		</div>
	)
}

export default function Bloqueadores(){
	return (
		<>
		<h2>Bloqueadores de Testosterona (Antiandrógenos)</h2>
		<p>
		<strong>Importante:</strong> Antes de usar qualquer um desses bloqueadores, se você já usa algum medicamento regularmente, pesquise na internet se o bloqueador que você escolher têm alguma interação negativa com o medicamento que você usa.
		</p>
		<AcetatoCipro />
		<Espironolactona />
		<Bicalutamida />
		</>
	)
}