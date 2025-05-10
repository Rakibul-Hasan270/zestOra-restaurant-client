import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabItem = () => {

    const getData = async () => {
        
    }

    return (
        <div className='max-w-6xl mx-auto border'>
            <Tabs>
                <div className='flex justify-center'>
                    <TabList>
                        <Tab>Drinks</Tab>
                        <Tab>Main</Tab>
                        <Tab>Dessert</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabItem;