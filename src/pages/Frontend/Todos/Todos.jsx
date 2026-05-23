import { Col, Row, Typography, Tabs, theme } from 'antd'
import StickyBox from 'react-sticky-box';
import AllTodos from './All/AllTodos';
import CompletedTodo from './Completed/CompletedTodo';
import InCompletedTodos from './InCompleted/InCompletedTodos';

const onChange = key => {
    console.log(key);
};

const items = [
    {
        label: `All Todos`,
        key: 1,
        children: <AllTodos/> ,
    },
    {
        label: `Active Todos`,
        key: 2,
        children: <CompletedTodo />,
    },
    {
        label: `Pending Todos`,
        key: 3,
        children: <InCompletedTodos />,
    }

]

const Todos = () => {

    const { Title } = Typography

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const renderTabBar = (props, DefaultTabBar) => (
        <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 1 }}>
            <DefaultTabBar {...props} style={{ background: colorBgContainer }} />
        </StickyBox>
    );

    return (
        <main>
            <div className="container">
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />
            </div>
        </main>
    )
}

export default Todos