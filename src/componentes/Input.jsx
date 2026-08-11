 export default function Input({ label, name, tipo = "text", options, ...props }) {
  return (
    <div className="w-full m-4"> 
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 text-left">
        {label || name} {/* Exibe a prop label, ou cai de volta no name se label for omitido */}
      </label>
      
      <div className="mt-2">
        {options ? (
          <select 
            id={name} // Importante adicionar o id para ligar ao htmlFor da label
            name={name} 
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base"
            {...props}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <input 
            id={name} 
            type={tipo} 
            name={name} 
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base" 
            {...props} 
          />
        )}
      </div>
    </div>
  );
}