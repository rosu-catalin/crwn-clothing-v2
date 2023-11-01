import {Link} from "react-router-dom";
import {useState} from "react";
import FormInput from "../../components/form/form-input.jsx";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields

    console.log(formFields)

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <main className="mx-auto w-full max-w-md p-6">
            <div className="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Already have an account?
                            <Link to='/sign-in' className="font-medium text-blue-600 decoration-2 hover:underline">
                                Sign in here
                            </Link>
                        </p>
                    </div>

                    <div className="mt-5">


                        {/* Form */}
                        <form>
                            <div className="grid gap-y-4">
                                <FormInput id={'displayName'} value={displayName} onChange={handleChange}
                                           title={'Display Name'}
                                           type={'text'}/>
                                <FormInput id={'email'} value={email} onChange={handleChange} title={'Email'}
                                           type={'email'}/>
                                <FormInput id={'password'}
                                           value={password}
                                           onChange={handleChange}
                                           title={'Password'}
                                           type={'password'}
                                />
                                <FormInput id={'confirmPassword'}
                                           value={confirmPassword}
                                           onChange={handleChange}
                                           title={'Confirm Password'}
                                           type={'password'}/>
                                <button type="submit"
                                        className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Sign
                                    up
                                </button>
                            </div>
                        </form>
                        {/* End Form */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignUp