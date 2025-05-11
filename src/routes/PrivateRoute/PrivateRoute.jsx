import useAuth from "../../hook/useAuth";

const PrivateRoute = () => {
    const { user } = useAuth()

    if (!user) return
};

export default PrivateRoute;