import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useQuery } from '@tanstack/react-query';
import ItemCard from '../../components/ItemCard/ItemCard';
import toast from 'react-hot-toast';
import axios from 'axios';

const TabItem = () => {

    const getData = async () => {
        try {
            const res = await axios(`${import.meta.env.VITE_API_URL}/items`);
            return res.data;
        } catch (err) {
            toast.error(err?.message, '|| fatching not found');
            // return [];
        }
    }

    const { data = [], isLoading } = useQuery({
        queryKey: ['items'],
        queryFn: () => getData()
    })

    if (isLoading) {
        return <p>loading...</p>
    }

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='space-y-5 mb-10'>
                <p className="text-5xl font-bold text-center">Menu</p>
                <p className='text-center tabs-xl w-4/6 mx-auto'>Each dish is crafted with perfect care by our expert chefs, full of flavor and passion. Our menu offers a wide variety of both local and international cuisine.</p>
            </div>
            <Tabs>
                <div className='flex justify-center'>
                    <TabList>
                        <Tab>Drinks</Tab>
                        <Tab>Main Dish</Tab>
                        <Tab>Dessert</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            data.filter(item => item.category === 'Drinks').map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            data.filter(item => item.category === 'Main Dish').map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            data.filter(item => item.category === 'Dessert').map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabItem;