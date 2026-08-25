export default function Input({ label, name, tipo = "text", options, isAutocomplete = false, children, ...props}) {
  const listId = options && isAutocomplete ? `list-${name}` : undefined;

  return (
    <div className="w-full m-4"> 
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 text-left">
        {label || children}
      </label>
      
      <div className="mt-2">
        {options && isAutocomplete ? (
          <>
            <input 
              id={name} 
              type={tipo} 
              name={name} 
              list={listId}
              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base" 
              {...props} 
            />
            <datalist id={listId}>
              {/* Usa opt + index no key para garantir chave única */}
              {options.map((opt, index) => (
                <option key={`${opt}-${index}`} value={opt} />
              ))}
            </datalist>
          </>
        ) : options ? (
          <select 
            id={name} 
            name={name} 
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base"
            {...props}
          >
            {/* Usa opt + index no key para garantir chave única */}
            {options.map((opt, index) => (
              <option key={`${opt}-${index}`} value={opt}>{opt}</option>
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