import React, {Component} from "react";
import {marked} from 'marked';
//This is all the text I'm going to show by default in the editor and in the reviewer as well
const texts=`
# Mamen's examples        ![](https://i.ibb.co/dQCHj0G/Mamen-MD-project.png)   
   
## Some placeholders
### How the previewer works

There are two sections. The first section, the Editor, contains some markedown elements. The second section, the Preview, shows the HTML version of what is introduced in the Editor. I have placed some examples, but feel free to change whatever you want in order to apreciate the changes in the Preview. For instance this is a paragraph, with a bold word at the end. See how I have made it. **Enjoy!**
***
First of all, I sent to you my best whises for this **New Year** :) !

All I want for **2022** is:
* Health
* Frienship
* Time to
  * adquire new knowledge
  * read
  * write 

 > I'm quoting myself.

## Some code samples
  A line of code \`<h1>\`

 A bloque of code  
~~~
  import React, {Component} from "react";
  
  import {marked} from 'marked';  
~~~ 

To know more about me visit [my profile in GitHub](https://github.com/Amapola-Negra)

Write mi at false@email.com
****

`
class MyMarkdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          input: texts                 
        };
    this.handleChange =this.handleChange.bind(this);
    }
    handleChange(event){
      this.setState({input:event.target.value})
    }

    render (){
      
       return (
            <div id="contenedor"> 
            <div id="conten-editor">
              <h2 className="centrado">Editor</h2>
             <textarea id="editor" value={this.state.input} onChange={this.handleChange}/>            
            </div>
            <div id="conten-preview">
              <h2 className="centrado">Preview</h2>
           <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.state.input)}}></div>
           </div>
            </div>

        )
    }
}
const About = () => {
  return (
    <div>
      <h1 className="centrado title"> Wellcome to Mamen's Markdown Previewer </h1>
      <MyMarkdown />
    </div>
  );
};
// Export this function in order to render it in index.js
export default About;
