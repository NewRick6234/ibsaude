

 export default function Input({ name, tipo = "text", options,children ,...props }) {
  return (
    <div className="w-full m-4"> 
      <label className="block text-sm font-medium text-gray-700 text-left">
        {children}
      </label>
      
      <div className="mt-2">
        {options ? (
          <select 
            name={name} 
            className="block w-full rounded-md border bg-white px-3 py-1.5 text-base"
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
            className="block w-full rounded-md border bg-white px-3 py-1.5 text-base" 
            {...props} 
          />
        )}
      </div>
    </div>
  );
}