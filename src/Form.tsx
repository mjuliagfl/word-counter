import { useForm } from "./hooks/UseForms";
import countStrings  from "./logic/WordCounter";
import CSS from 'csstype';

function Form() {
    const initialState = {
        text: ''
    };

    const countInitialState = '-';
    const error = "Error: please insert some word on the text box"

    const textAreaLabel = 'counterLabel';

    const { onChange, onSubmit, values} = useForm(
        formCallback,
        initialState
    );

    async function formCallback() {
        console.log("Will count words on text box")
        const count = countStrings(values)
        const label = document.getElementById(
            textAreaLabel,
          ) as HTMLDivElement | null;
        if (label) {
            if (count && count > 0) {
                label.textContent = count.toString()
            } else {
                label.textContent = error
            }    
        }
    }

    const textAreaStyle: CSS.Properties = {
            height:'200px',
            width:'400px',
            fontSize:'14pt',
            overflowY:'scroll',
            overflowX:'scroll',
            overflow:'scroll'
      };

    return (
        <form onSubmit={onSubmit}>
        <div>
            <h1> 
                Welcome to my word counter app!
            </h1>
            
            <textarea
                name='text'
                id='text'
                placeholder='Text'
                onChange={onChange}
                form='novalidateform'
                style={textAreaStyle}
                />
            <br></br>
            <button type='submit'>Submit</button>
            <h2>
                Word count:
            </h2>
            <h3 id={textAreaLabel}>
                {countInitialState}
            </h3>
        </div>
        </form>
    );
}

export default Form;