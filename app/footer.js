import React from 'react'
import main_data from "../json/main.json"

const Footer = () => {
    return (
        <div className='footer'>
            {/*First Container*/}
            <div className='footer_container footer_container_1'>
                <div className='heading'></div>
                <div className='button'></div>
                <label className='description'>
                    <input type="checkbox" className='footer_checkbox' />
                </label>
            </div>
            {/*Container End*/}

            {/*Second Container*/}
            <div className='footer_container footer_container_2'>
                <div className='heading'></div>
                <div className='navlink'><Image className="image" /></div>
                <div className='navlink'><Image className="image" /></div>
                <div className='navlink'><Image className="image" /></div>
                <div className='navlink'><Image className="image" /></div>
                <div className='navlink'></div>
                <div className='navlink'></div>
            </div>
            {/*Container End*/}

            {/*Third Container*/}
            <div className='footer_container footer_container_3'>
                <div className='heading'></div>
                <div className='navlink'></div>
                <div className='navlink'></div>
                <div className='navlink'></div>
                <div className='navlink'></div>
                <div className='navlink'></div>
            </div>
            {/*Container End*/}

            {/*Fourth Container*/}
            <div className='footer_container footer_container_4'>
                <div className='heading'></div>
                <div className='navlink'></div>
                <div className='navlink navlink_underlined'></div>
                <div className='navlink'></div>
                <div className='navlink navlink_underlined'></div>
                <div className='navlink'></div>
            </div>
            {/*Container End*/}

            {/*Fifth Container*/}
            <div className='footer_container footer_container_5'>
                <div className='heading'></div>
                <div className='description'></div>
            </div>
            {/*Container End*/}

            {/*Sixth Container*/}
            <div className='footer_container footer_container_6'>
                <div className='heading'></div>
                <div className='navlink'></div>
                <div className='navlink'></div>
                <div className='navlink'></div>
                <div className='navlink'></div>
                <div className='navlink'></div>
                <div className='navlink'></div>
            </div>
            {/*Container End*/}

            {/*Seventh Container*/}
            <div className='footer_container footer_container_7'>
                <div className='heading'></div>
                <div className='navlink'><Image className="image" /></div>
                <div className='navlink'><Image className="image" /></div>
                <div className='navlink'><Image className="image" /></div>
                <div className='navlink'></div>
                <div className='navlink'></div>
                <div className='navlink'><Image className="image" /></div>
            </div>
            {/*Container End*/}

            {/*Eight Container*/}
            <div className='footer_container footer_container_8'>
                <div className='heading'></div>
                <div className='heading'></div>
            </div>
            {/*Container End*/}
        </div>
    )
}

export default Footer