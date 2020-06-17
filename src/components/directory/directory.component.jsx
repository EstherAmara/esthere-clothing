import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'HATS',
                   //imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    imageUrl: 'images/croissant.jpg',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'JACKETS',
                //   imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    imageUrl: 'images/jeans1.jpg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'SNEAKERS',
                    // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    imageUrl: 'images/jeans2.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'WOMENS',
                    // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    imageUrl: 'images/jeans3.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'MENS',
                    // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    imageUrl: 'images/jeans4.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render()  {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherComponents}) => (
                        <MenuItem 
                            key = {id} 
                            {...otherComponents}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory;