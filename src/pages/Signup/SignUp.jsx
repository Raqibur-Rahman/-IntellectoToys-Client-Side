
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);

            })
    }

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold">Sign Up now!</h1>
                            <p className="py-6">Welcome aboard!<br /> Fill in the required information below to create your account securely. We are thrilled to have you join our community! <br /> Your privacy and security are our top priorities. Get ready to embark on an exciting journey with us. Let us get started!</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleSignUp}>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Set Password</span>
                                        </label>
                                        <input type="text" name="password" placeholder="password" className="input input-bordered" />

                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                                    </div>
                                </form>
                                <p className="my-5 text-center">Already have an account?
                                    <Link className="text-orange-700 font-bold" to='/login'> Sign in</Link>
                                </p>
                                <p className="text-red-950 bg-orange-300 font-bold text-xl p-1 rounded">Error Message : <span className="text-red-700 font-bold ">{error}</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;