import React from 'react';
import { Button , Icon} from 'antd';
import IgleLogo from '../../../assets/img/png/ejb.png';

import './MenuTop.scss';

export default function MenuTop() {
    return (
        <div className='menu-top'>
           <div className="menu-top__left">
                <img
                    className="menu-top__left-logo"
                    src={IgleLogo}
                    alt="Iglesia Evangelica Bautista Ejercito De los Andes"
                />
                <Button 
                    type="link" 
                    ghost={true}
                    onClick={()=>console.log("Click!!")}>
                        <Icon 
                            type="menu-fold"
                        />
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link">
                    <Icon
                        type="poweroff"
                    />
                </Button>
            </div>
        </div>
    )
}
