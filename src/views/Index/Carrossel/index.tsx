import { Carrossel, SectionText, SectionImg,H4 } from "./styles";
import Image from 'next/image'
import Link from 'next/link'

export default function CarrosselView() {

  return (
    <>
      <Carrossel initial={{opacity: 0, y: -50}} animate={{opacity: 1, y:0}}>
        <SectionText>
          <div>
            <h1>Além das Telas</h1>
            <h3>Conhecendo o outro lado da Educação</h3>
          </div>
          <div>
            <p>Aquele que não vemos nas salas de aula e não nos mostram na tela do computador</p>
            <Link href={"/"}><H4 whileHover={{transform:"translateX(5px)"}}>COMEÇAR</H4></Link>
          </div>
        </SectionText>
        <SectionImg whileHover={{ scale: 1.1 }}>
          <img src="/carrossel.svg" alt="" />
        </SectionImg>
      </Carrossel>
    </>
  );
};
