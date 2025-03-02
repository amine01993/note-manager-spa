import {PlusCircleOutlined, UserOutlined} from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

export default function Header() {

    function addNewNote() {
        console.log('add new note');
    }

    return (
        <div className="app-header">
            <div className="left-side">
                Logo
            </div>

            <div className="right-side">
                <Tooltip title="Add a new note">
                    <Button color="default" variant="filled" shape="circle" size="large" 
                        icon={<PlusCircleOutlined style={{ fontSize: '20px' }}
                        onClick={addNewNote} />} />
                </Tooltip>
                <Tooltip title="User profile">
                    <Button color="default" variant="filled" shape="circle" size="large" icon={<UserOutlined style={{ fontSize: '20px' }} />} />
                </Tooltip>
            </div>
        </div>
    );
}
