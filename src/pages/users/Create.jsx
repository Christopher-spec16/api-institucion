import { Link } from 'react-router-dom';
import { getData, createData } from '../../api/services';
import { end_points } from '../../api/config';
import { useState, useEffect } from 'react';
import { buscarItem } from '../../utils/helpers';

export default function UsersCreate() {
  const [estudiantes, setEstudiantes] = useState([])
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [tipoDocumento, setTipoDocumento] = useState("")
  const [numeroDocumento, setNumeroDocumento] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [fechaNacimiento, setFechaNacimiento] = useState("")
  const [genero, setGenero] = useState("")
  const [ciudad, setCiudad] = useState("")
  const [direccion, setDireccion] = useState("")
  const [semestre, setSemestre] = useState("")
  const [carrera, setCarrera] = useState("")
  const [estado, setEstado] = useState("")
  useEffect(() => {
    getData(end_points.estudiantes)
      .then((data) => setEstudiantes(data))
  }, [])

  let user = buscarItem(estudiantes, numeroDocumento, email)

  function registrarEstudiante() {
    let estudiante = { nombre, tipoDocumento, numeroDocumento, apellido, telefono, fechaNacimiento, genero, ciudad, direccion, semestre, carrera, estado, email }
    if (user) {
      alert("El Usuario ya existe en la base de datos")
    } else {
      createData(end_points.estudiantes, estudiante)
        .then((data) => console.log(data))
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-2 text-xs text-slate-500">
        <Link to="/estudiantes" className="hover:text-blue-600 transition-colors">Estudiantes</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Nuevo Registro</span>
      </div>

      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Registrar Nuevo Estudiante</h1>
          <p className="text-sm text-slate-500 mt-1">
            Formulario de ingreso para nuevo integrante de la comunidad académica.
          </p>
        </div>
        <Link
          to="/estudiantes"
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
        >
          Volver al listado
        </Link>
      </div>

      <form className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            1. Datos de Identificación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Tipo de Documento
              </label>
              <select
                onChange={(e) => setTipoDocumento(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="">Seleccione</option>
                <option value="CC">Cédula de Ciudadanía (CC)</option>
                <option value="CE">Cédula de Extranjería (CE)</option>
                <option value="TI">Tarjeta de Identidad (TI)</option>
                <option value="PASAPORTE">Pasaporte</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Número de Documento
              </label>
              <input
                onChange={(e) => setNumeroDocumento(e.target.value)}
                type="text"
                placeholder="Ej. 1024589632"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Nombres
              </label>
              <input
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                placeholder="Ej. Carlos Andrés"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Apellidos
              </label>
              <input
                onChange={(e) => setApellido(e.target.value)}
                type="text"
                placeholder="Ej. Mendoza Gómez"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Fecha de Nacimiento
              </label>
              <input
                onChange={(e) => setFechaNacimiento(e.target.value)}
                type="date"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Género
              </label>
              <select
                onChange={(e) => setGenero(e.target.value)}
                defaultValue="Masculino"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="">Seleccione</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro / Prefiero no decir</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            2. Contacto y Localización
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Correo Electrónico Institucional / Personal
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="estudiante@universidad.edu.co"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Teléfono de Contacto
              </label>
              <input
                onChange={(e) => setTelefono(e.target.value)}
                type="tel"
                placeholder="+57 300 000 0000"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Ciudad de Residencia
              </label>
              <select
                onChange={(e) => setCiudad(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="">Seleccione</option>
                <option value="Bogotá">Bogotá D.C.</option>
                <option value="Medellín">Medellín</option>
                <option value="Cali">Cali</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Bucaramanga">Bucaramanga</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Dirección Residencial
              </label>
              <input
                onChange={(e) => setDireccion(e.target.value)}
                type="text"
                placeholder="Calle, Carrera, Barrio y Apto"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            3. Registro Académico
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Programa / Carrera
              </label>
              <select
                onChange={(e) => setCarrera(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="">Seleccione</option>
                <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
                <option value="Ciencia de Datos">Ciencia de Datos</option>
                <option value="Diseño Digital y Multimedia">Diseño Digital y Multimedia</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Semestre de Ingreso
              </label>
              <select
                onChange={(e) => setSemestre(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="">Seleccione</option>
                <option value="1">Semestre 1</option>
                <option value="2">Semestre 2</option>
                <option value="3">Semestre 3</option>
                <option value="4">Semestre 4</option>
                <option value="5">Semestre 5</option>
                <option value="6">Semestre 6</option>
                <option value="7">Semestre 7</option>
                <option value="8">Semestre 8</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Estado Inicial
              </label>
              <select
                onChange={(e) => setEstado(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="">Seleccione</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 pt-2">
          <Link
            to="/estudiantes"
            className="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Cancelar
          </Link>
          <button
            onClick={registrarEstudiante}
            type="button"
            className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
          >
            Guardar Estudiante
          </button>
        </div>
      </form>
    </div>
  );
}
