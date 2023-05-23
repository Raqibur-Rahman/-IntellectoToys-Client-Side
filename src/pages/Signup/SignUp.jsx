
import { Link } from "react-router-dom";

const SignUp = () => {


    const handleSignUp = (event) => {
        event.preventDefault();
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
                                        <input type="text" name="passowrd" placeholder="password" className="input input-bordered" />
                                       
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Login" />
                                    </div>


                                </form>
                                <p className="my-5 text-center">Already have an account?
                                    <Link className="text-orange-700 font-bold" to='/login'> Sign Up</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;