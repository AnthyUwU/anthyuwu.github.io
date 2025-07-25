import styles from '../layout.module.css'
export default function Home(){
	return (
		<div className={styles.page}>
		  <main className={styles.main}>
			<h1>Manual de Aplicação de injetáveis</h1>
			<p>
			Essa página ainda está em construção.
			</p>
			<p>
			Se você escolheu fazer TH com estradiol injetável, eu e minha esposa (anthyuwu e starpanims no Discord) fizemos um vídeo mostrando o processo.
			</p>
			<p>
			Se você tiver alguma dúvida com o vídeo ou precisar de mais ajuda, sinta-se livre para nos chamar no Discord ou entrar no nosso servidor para tirar suas dúvidas!
			</p>

			<a href="https://discord.gg/dm49CtfVju">https://discord.gg/dm49CtfVju</a>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/wsofV8BSmRU" title="Perlutan tutorial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
		  </main>
		</div>
	  );
}