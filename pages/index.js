import Head from 'next/head'
import Image from 'next/image'
import Avatar from '\u0016\u0016@component/componentes/avatar'
import Botao from '\u0016\u0016@component/componentes/botao'
import { UploadImagem } from '\u0016\u0016@component/componentes/uploadImagem'
import { useState, useRef } from 'react'

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);



  return (
    <>
      <h1>Olá, Mundo</h1>
      <button onClick={() => referenciaInput?.current?.click()}>abrir Seletor Arquivos</button>

      <UploadImagem 
        setImagem={setImagem} 
        imagemPreview={imagem?.preview}
        aoSetarAReferencia={(ref) => referenciaInput.current = ref} 
        />

      <div style={{width: 200}}>
        <Avatar />
        <Botao texto={'Login'} cor='invertido' manipularClique={() => console.log('Botão Clicado')} />
      </div>
    </>
  )
}
