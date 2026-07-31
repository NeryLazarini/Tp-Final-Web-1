interface Producto{
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  categoria: string;
  stock: number;
}

type DatosProducto = Omit<Producto, 'id'>;

export type {Producto, DatosProducto};