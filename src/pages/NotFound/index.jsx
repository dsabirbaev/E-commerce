import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import "./style.scss";

const index = () => {
    return (
        <section>
            <div className="w-screen h-screen bg-slate-300 absolute top-0 left-0 z-50">
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button className='bg-blue-500 text-white'><Link to="/">Back Home</Link></Button>}
                />
            </div>
        </section>
    );
};

export default index;