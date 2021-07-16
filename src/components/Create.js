/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {Component} from 'react';

const formTag = css({
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',        
})

const inputTag = css({
    width: '74%',
    padding: '12px 20px',
    margin: '8px 0',        
    border: '0px',
    borderRadius: '4px',
    boxSizing: 'border-box',
    outline: 'none',
    color: '#5f6a86',
    '&::placeholder' : {
        color: '#a9a9a9'
    }    
})

const submitBtn = css({
    width: '25%',
    backgroundColor: '#fc9018',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',  
    '&: hover' : {
        backgroundColor: '#fa9f3a',
        transitionDelay: '.03s'
    }  
})

export default class Create extends Component{    
    render(){
        const onSubmit = e => {
            e.preventDefault();            
            this.props.onCreate(e.target.title.value);            
            e.target.title.value='';
        }

        return (
            <form action="/create_process" method="post" onSubmit={onSubmit.bind(this)} css = {formTag}>
                <input type="text" name="title" placeholder="할일을 입력하세요" autoFocus="autofocus" css={inputTag} /> 
                <input type="submit" value="추가하기" css={submitBtn} />
            </form> 
        );
    }
}