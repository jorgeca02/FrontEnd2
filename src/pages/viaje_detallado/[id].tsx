import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { ViajeDetails } from '../components/viaje.tsx'

import { useRouter } from 'next/router'
import { data } from "../../data/data.ts";

const inter = Inter({ subsets: ['latin'] })
export default function Viaje() {
  const router = useRouter()
  const query:{id} = router.query;
  const parsed = parseInt(query.id);
  return (
    <>
      <main className={styles.main}>
        <img className="imagenLarga" src={data[parsed].imagenLarga}></img>
        <div className="titulo" id="tituloDetail">{data[parsed].titulo}</div>
        <div className="descripcionLarga" id="descripcionDetail">{data[parsed].descripcionLarga}</div>
        <Link href="/" className="boton" >Volver</Link>
      </main>
    </>
  )
}