/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {Component} from 'react';
import TOC from './components/TOC';
import Create from './components/Create'

const wall = css({
  boxShadow: '20px 20px 30px 0 rgba(0,0,0,0.1)',
  backgroundColor: '#f1f8fd',    
  borderRadius: '70px',
  display: 'flex',
  flexDirection: 'column',  
  alignItems: 'center',
  width: '570px',
  minHeight: '700px',
  marginTop: '70px',
  paddingBottom: '17px',    
  paddingTop: '7px'
})

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 0;    
    this.state = { contents: [] };
  }  
  render(){
    const onCreate = (_desc) => {          
      var newArr = [{ id: this.max_content_id, desc: _desc, active: true }];           
      this.setState({ contents: newArr.concat(this.state.contents) });   //추가하는 항목 0번째 인덱스 위해서 concat 순서 중요
    };

    const onChange = (btn_name, btn_id) => {                      
      var _contents = Array.from(this.state.contents);
      var i = 0;    
      var active;
      var temp;

      while(i < _contents.length){              
        if(Number(btn_id) === _contents[i].id){                     
          break;                
        }       
        i = i + 1;                     
      }//while

      if(btn_name === '✔'){                                          
        active = _contents[i].active;        
        if (active) {                            
          _contents[i].active = !active;                         
          temp = _contents.splice(i, 1);          
          _contents = _contents.concat(temp);          
          this.setState({ contents: _contents });  
        } else{          
          _contents[i].active = !active;
          temp = _contents.splice(i, 1)                    
          _contents.unshift(temp[0]);          
          this.setState({ contents: _contents });
        }
      }
      
      if(btn_name === '✖'){
        _contents.splice(i, 1);
        this.setState({ contents: _contents });
      }

    };

    this.max_content_id = this.max_content_id + 1;    
    return (
      <div className="App" css={wall}><br/>        
        <header className="title" css={{fontSize : '2.2em', fontWeight: '800', color: '#5f6a86'}}>Note</header><br/>              
        <Create onCreate={onCreate.bind(this)}></Create>
        <TOC data={this.state.contents} onChange={onChange.bind(this)}></TOC>
      </div>
    );
  }
}
export default App;