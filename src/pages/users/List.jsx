import { Link } from 'react-router-dom';
import { getData } from '../../api/services';
import { end_points } from '../../api/config';
import { useState, useEffect } from 'react';

export default function UsersList() {
  const [estudiantes, setEstudiantes] = useState([])
  useEffect(() => {
    getData(end_points.estudiantes)
      .then((data) => setEstudiantes(data))
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Estudiantes</h1>
          <p className="text-sm text-slate-500 mt-1">
            Gestión y seguimiento del cuerpo estudiantil matriculado.
          </p>
        </div>
        <Link
          to="nuevo"
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-xs transition-colors"
        >
          <span className="mr-1.5 text-base leading-none font-bold">+</span>
          Registrar Estudiante
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Estudiantes</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-slate-900">10</span>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              Registrados
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Estudiantes Activos</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-slate-900">9</span>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              90% del total
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Inactivos / Pausa</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-slate-900">1</span>
            <span className="text-xs font-medium text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
              Requiere revisión
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Programas Académicos</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-slate-900">3</span>
            <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              Pregrado & Tec
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="w-full md:w-96">
          <div className="relative">
            <input
              type="text"
              readOnly
              placeholder="Buscar por nombre, documento o carrera..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-hidden"
              defaultValue=""
            />
            <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-wrap gap-2">
          <select
            disabled
            className="px-3 py-2 text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg text-slate-600"
            defaultValue="todas"
          >
            <option value="todas">Todas las carreras</option>
            <option value="sistemas">Ingeniería de Sistemas</option>
            <option value="datos">Ciencia de Datos</option>
            <option value="diseno">Diseño Digital</option>
          </select>

          <select
            disabled
            className="px-3 py-2 text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg text-slate-600"
            defaultValue="todos"
          >
            <option value="todos">Todos los estados</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th scope="col" className="px-6 py-3.5">Estudiante</th>
                <th scope="col" className="px-6 py-3.5">Contacto</th>
                <th scope="col" className="px-6 py-3.5">Carrera & Semestre</th>
                <th scope="col" className="px-6 py-3.5">Ciudad</th>
                <th scope="col" className="px-6 py-3.5">Estado</th>
                <th scope="col" className="px-6 py-3.5 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {estudiantes.map((estudiante) => (
                <tr key={estudiante.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">
                        {estudiante.nombre[0]}{estudiante.apellido[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 leading-tight">
                          {estudiante.nombre} {estudiante.apellido}
                        </p>
                        <p className="text-xs text-slate-500 font-mono mt-0.5">
                          {estudiante.tipoDocumento}: {estudiante.numeroDocumento}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-slate-800 text-xs">{estudiante.email}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{estudiante.telefono}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-800 text-xs">{estudiante.carrera}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                      Semestre {estudiante.semestre}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-slate-800 text-xs font-medium">{estudiante.ciudad}</p>
                    <p className="text-slate-500 text-[11px] truncate max-w-[160px]">{estudiante.direccion}</p>
                  </td>
                  <td className="px-6 py-4">
                    {estudiante.estado === 'Activo' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                        Activo
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1.5"></span>
                        Inactivo
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="inline-flex items-center space-x-2">
                      <Link
                        to="/estudiantes/editar"
                        className="px-2.5 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors"
                      >
                        Editar
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Mostrando 6 de 10 estudiantes</span>
          <div className="flex space-x-1">
            <button disabled className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-400 cursor-not-allowed">
              Anterior
            </button>
            <button className="px-2.5 py-1 rounded border border-blue-600 bg-blue-600 text-white font-medium">
              1
            </button>
            <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-100">
              2
            </button>
            <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-100">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
