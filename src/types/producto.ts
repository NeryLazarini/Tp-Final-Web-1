interface Producto{
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    descripcion: string;
    imagen?: string;
}

type DatosProducto = Omit<Producto, 'id'>;

export type {Producto, DatosProducto};