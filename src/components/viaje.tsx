import Link from "next/link";
export type ViajeDetailsProps = {
destino:Destino
}
export type Destino={
    id:number,
    titulo:String,
    descripcionCorta:String,
    descripcionLarga:String,
    imagenCorta:String,
    imagenLarga:String,
}
export const ViajeDetails = (props: ViajeDetailsProps) => {
    const url="/viaje_detallado/"+props.destino.id
    return (
        <>
        <Link href={url} className="destino" >
            <img className="imagenCorta" src={props.destino.imagenCorta}></img>
            <div className="titulo">{props.destino.titulo}</div>
            <div className="descripcionCorta">{props.destino.descripcionCorta}</div>
        </Link>
        </>
    )
}