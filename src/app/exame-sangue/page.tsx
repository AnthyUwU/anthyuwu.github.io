import styles from '../layout.module.css'

function Acetato(){
	const exames = [
		"Prolactina",
		"Proteínas Totais",
		"Fosfatase Alcalina",
		"Albumina"
	]
	return (
		<div className={styles.content}>
			<h2>Acetato de Ciproterona</h2>
			<div className={styles.content}>
			<p>
			O Acetato de Ciproterona, em casos raros, pode ser tóxico para o seu fígado.
			</p>
			<p>
			Por isso, é importante incluir alguns exames que nos mostrem se seu fígado está funcionando normalmente, ou se apresenta problemas. Se feitos dentro do prazo de 3 em 3 meses que foi sugerido, os exames de sangue vão nos alertar de qualquer anormalidade antes que se transforme num problema de verdade.
			</p>
			<p>
			Além disso, outro efeito da Ciproterona é o aumento da Prolactina no sangue. Isso por si só não é um problema (quando tomado na dose certa de 12.5mg/dia), mas se você tomar algum outro remédio que também aumenta a prolactina, como a maioria dos antidepressivos, antipsicóticos e ansiolíticos (Rivotril / Clonazepam), o efeito pode se acumular e gerar um problema. Caso você tome algum desses tipos de remédio diariamente, pesquise na internet se o seu medicamento é conehcido por aumentar a Prolactina. Se for, é melhor evitar a Ciproterona e escolher outro bloqueador.
			</p>
			</div>

			<Exames exames={exames}/>
		</div>
	)
}


function Espironolactona(){
	const exames = [
		"Potássio (opcional)",
		"Sódio",
		"Eletrólitos",
		"Creatinina",
		"TFGe"
	]
	return (
		<div className={styles.content}>
			<h2>
			Espironolactona
			</h2>
			<div className={styles.content}>
				<p>
				A Espironolactona, além dos efeitos antiandrogênicos (bloqueador de Testosterona), também causa:
				</p>
				<ul>
					<li>Aumento da liberação de sódio na urina (Seu corpo perde mais sódio que o normal)</li>
					<li>Retenção de Potássio (Acumulando mais potássio que o normal)</li>
				</ul>
				<p>
				Se você tiver escolhido Espironolactona como seu bloqueador, evite exagerar em alimentos ricos em potássio. Ao mesmo tempo, busque sempre se hidratar!
				</p>
				<p>
				Se você ou algum parente próximo sofre com hipercalemia ou problemas nos rins, evite tomar Espironolactona.
				</p>
			</div>

			<Exames exames={exames}/>
		</div>
	)
}

function Bicalutamida(){
	const exames = ["Transaminase Glutâmico Pirúvica",
		 "Transaminase Glutâmico Oxalacética", "Bilirrubina Total"]
	return (
		<div className="content">
			<h2>
			Bicalutamida
			</h2>
			<div className={styles.content}>
			<p>
			Lembrando que a Bicalutamida age nos <strong>receptores</strong> de Testosterona, não na produção. Por isso, espere ver níveis altos de Testosterona nos seus exames! É normal e significa que ela está funcionando.
			</p>
			<p>
			Evite usar Bicalutamida se você tiver Cirrose ou Hepatite.
			</p>
			</div>
			<Exames exames={exames}/>

		</div>
	)
}

function Exames(props: {exames: Array<string>}){
	return (
		<>
		<h3>Exames:</h3>
		<div className={styles.content}>
		<ul>
			{props.exames.map((value: string) => (
				<li key={value}>{value}</li>
			))}
		</ul>
		</div>
		</>
	)
}

function Bloqueadores(){
	return (
		<div className={styles.content}>
			<h2>Bloqueadores</h2>
			<div className={styles.content}>
			<p>
			Dependendo do bloqueador que você escolher, os exames de sangue são diferentes! (além de Estradiol e Testosterona total para todos os casos)
			</p>
			<p>
			Lembrando que, para TH injetável, <strong>NÃO é necessário</strong> tomar bloqueador de testosterona. Tomar um bloqueador sem necessidade aumenta os riscos de efeitos adversos. Por favor siga essa instrução, mesmo que um endocrinologista ou amigo/a &quot;experiente&quot; te diga o contrário.
			</p>
			</div>
		</div>
	)
}

export default function Home(){
	return (
		<div className={styles.page}>
		  <main className={styles.main}>
			<h1>Exames de sangue</h1>
			<p><strong>Você deve fazer exames de sangue de 3 em 3 meses, incluindo antes de iniciar sua TH para sabermos os níveis hormonais naturais do seu corpo.</strong></p>

			<h2>SEMPRE faça esses exames:</h2>
			<p>Não importa se você escolheu fazer TH por via oral, gel, adesivo ou injetável. Esses 2 exames vão ser sempre necessários</p>
			<ul>
				<li>Estradiol (E2 ou 17β-estradiol)</li>
				<li>
				Testosterona Total
				</li>
			</ul>
			<p>Se seu Estradiol estiver abaixo de 100 pg/mL após 3 meses de TH, faça reajuste de dose.</p>
			<p>
			Se sua Testosterona Total estiver acima de 60 ng/dL após 3 meses de TH, faça reajuste de dose ou troque de bloqueador.
			</p>
			<Bloqueadores />
			<Acetato />
			<Espironolactona />
			<Bicalutamida />
		  </main>
		</div>
	  );
}