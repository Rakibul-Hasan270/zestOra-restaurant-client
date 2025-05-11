import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import toast from "react-hot-toast";

const MyCard = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const getData = async () => {
        try {
            const res = await axiosSecure.get(`/card_item/${user?.email}`);
            return res.data;
        } catch (err) {
            console.log(err);
            toast.error(err?.message, '. fetching data not found');
        }
    }

    const { data = [], isLoading } = useQuery({
        queryKey: ['card_item'],
        queryFn: () => getData(),
        enabled: !!user?.email
    })

    if (isLoading) return <p className="text-center mt-10">Loading...</p>

    return (
        <div className='max-w-6xl mx-auto'>
            <p>
                {
                    // data.map(item =>)
                }
            </p>
        </div>
    );
};

export default MyCard;