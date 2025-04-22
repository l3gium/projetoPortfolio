export default function ProjectsCarousel(){
    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-white mb-4">Projetos</h2>
            <div className="flex overflow-x-auto space-x-4 p-4">
                
                <div className="bg-gray-800 rounded-lg p-4 w-64 flex-shrink-0">
                    <h3 className="text-lg font-semibold text-white">Projeto 1</h3>
                    <p className="text-gray-400">Descrição do projeto 1.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 w-64 flex-shrink-0">
                    <h3 className="text-lg font-semibold text-white">Projeto 2</h3>
                    <p className="text-gray-400">Descrição do projeto 2.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 w-64 flex-shrink-0">
                    <h3 className="text-lg font-semibold text-white">Projeto 3</h3>
                    <p className="text-gray-400">Descrição do projeto 3.</p>
                </div>
            </div>
        </div>
    )
}