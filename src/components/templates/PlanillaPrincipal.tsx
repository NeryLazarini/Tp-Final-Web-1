import{Outlet, Link} from 'react-router-dom';

export default function PlanillaPrincipal(){
    return(
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-600 text-while p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Mi Ecommerce Dashboard</h1>
                    <ul className="flex gap-4">
                        <li><Link to="/" className="hover:underline">Inicio</Link></li>
                        <li><Link to="/productos" className="hover:undeline">Productos</Link></li>
                        <li><Link to="/perfil" className="hover:underline">Perfil</Link></li>
                    </ul>
                </div>
            </nav>
            <main className="container mx-auto p-4">
                {/* Aca se renderiza la pagina*/}
                <Outlet />
            </main>
        </div>
    );
}