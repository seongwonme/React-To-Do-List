/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {Component} from 'react';

class Content extends Component {
    render() {
        const uls = css({        
            borderBottom: '1.4px solid black',
            borderColor: 'rgba(95, 106, 134, 0.2)',
            display: 'flex',    
            width: '500px',   
            marginBottom: '16px',    
            paddingBottom: '4px',
            color: '#5f6a86'  
        });
        
        const content_li = css({     
            fontWeight: '500',           
            width: '90%',
            minHeight: '40px',        
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            wordBreak: 'break-all',    
            textDecoration: this.props.active ? 'none' : 'line-through',
            textDecorationThickness: '3px'
        });
        
        const delete_li = css(content_li, {    
                width: '10%',          
                marginRight: '7px',
                color: this.props.active ? '#fc9018' : '#5f6a86',
                textDecoration: 'none',                
                '&: hover' : {            
                    color: this.props.active ? '#5f6a86' : '#fc9018',
                    transitionDelay: '.03s'
                }
        });

        return (
            <div
                className="content" 
                onClick={function(e){this.props.onChange(e.target.textContent, e.target.id);}.bind(this)}
                css = {{marginBottom: '4px'}}
            >                    
                <ul css={uls}>                        
                    <li id={this.props.id} css={delete_li}>
                        ✖
                    </li>  
                    <li css={content_li}>
                        {this.props.desc}
                    </li>                                                                        
                    <li id={this.props.id} css={delete_li}>
                        ✔
                    </li>   
                </ul>                    
            </div>
        );
    }
}

export default class TOC extends Component {    
    render(){            
        return (
            <div css={{marginTop: '14px', marginBottom: '40px'}}>                                  
                    {this.props.data.map(data => (
                        <Content
                            key={data.id}
                            id={data.id}
                            active={data.active}
                            desc={data.desc}
                            onChange={this.props.onChange}
                        />
                    ))} 
            </div>    
        );
    }
}