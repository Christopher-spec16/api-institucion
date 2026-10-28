import { Link } from 'react-router-dom';
import { getData } from '../../api/services';
import { end_points } from '../../api/config';
import { useState, useEffect } from 'react';


export default function CoursesList() {

  const [cursos, setCursos] = useState([])
  useEffect(() => {
    getData(end_points.cursos)
      .then((data) => setCursos(data))
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Catálogo de Cursos</h1>
          <p className="text-sm text-slate-500 mt-1">
            Programas formativos, asignaturas especializadas y cupos ofertados.
          </p>
        </div>
        <Link
          to="/cursos/nuevo"
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-xs transition-colors"
        >
          <span className="mr-1.5 text-base leading-none font-bold">+</span>
          Crear Nuevo Curso
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cursos Activos</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-slate-900">5</span>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              100% Disponibles
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cupos Globales</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-slate-900">115</span>
            <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              Capacidad
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Departamentos</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-slate-900">4</span>
            <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              Áreas
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Valor Promedio</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-900">$460.000</span>
            <span className="text-xs font-medium text-slate-500">COP</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="w-full md:w-96">
          <div className="relative">
            <input
              type="text"
              readOnly
              placeholder="Buscar por código, título o instructor..."
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
            <option value="todas">Todas las modalidades</option>
            <option value="virtual">Virtual</option>
            <option value="presencial">Presencial</option>
            <option value="hibrida">Híbrida</option>
          </select>

          <select
            disabled
            className="px-3 py-2 text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg text-slate-600"
            defaultValue="todos"
          >
            <option value="todos">Todos los departamentos</option>
            <option value="software">Ingeniería de Software</option>
            <option value="ia">Inteligencia Artificial</option>
            <option value="diseno">Diseño Digital</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-100 text-slate-800 rounded border border-slate-200">
                  {curso.codigo}
                </span>

                <div className="flex items-center space-x-2">
                  {curso.modalidad === 'Virtual' && (
                    <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      Virtual
                    </span>
                  )}
                  {curso.modalidad === 'Híbrida' && (
                    <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      Híbrida
                    </span>
                  )}
                  {curso.modalidad === 'Presencial' && (
                    <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                      Presencial
                    </span>
                  )}

                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {curso.estado}
                  </span>
                </div>
              </div>

              <h2 className="text-lg font-bold text-slate-900 leading-snug">
                {curso.titulo}
              </h2>
              <p className="text-xs font-semibold text-blue-600 mt-1">
                {curso.departamento}
              </p>

              <p className="text-sm text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                {curso.descripcion}
              </p>

              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <div>
                  <span className="text-slate-400 block text-[11px]">Instructor:</span>
                  <span className="font-semibold text-slate-800">{curso.instructor}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Horario:</span>
                  <span className="font-medium text-slate-800">{curso.horario}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Duración & Créditos:</span>
                  <span className="font-medium text-slate-800">{curso.duracionHoras}h ({curso.creditos} Créditos)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Cupo Máximo:</span>
                  <span className="font-medium text-slate-800">{curso.cupoMaximo} estudiantes</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Inversión:</span>
                <span className="text-base font-bold text-slate-900">
                  ${curso.precio.toLocaleString('es-CO')} COP
                </span>
              </div>

              <Link
                to="/cursos/editar"
                className="px-3.5 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
              >
                Editar Curso
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
