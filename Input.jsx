function Input({name, tipo="text"}){


return(

      <div className="flex flex-col items-center w-100">
        <div className="w-full"><label htmlFor="email" className="block text-sm/6 font-medium text-black-100 text-left">{name}</label></div>
        <div className="mt-2">
          <input id={name} type={tipo} name={name} required autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

     
      
)

}
export default Input