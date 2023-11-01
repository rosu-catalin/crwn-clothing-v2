const FormInput = (props) => {
    const {title, id, onChange} = props
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm">{title}</label>
            <div className="relative">
                <input
                    id={id}
                    name={id}
                    onChange={onChange}
                    {...props}
                    className="block w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                    required/>
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 flex hidden items-center pr-3">
                    <svg className="h-5 w-5 text-red-500" width="16" height="16"
                         fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default FormInput