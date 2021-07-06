import sytyled from 'styled-components'

export const Wrapper = sytyled.div`
display: flex;
justify-content: center;
`

export const Accordion = sytyled.div`
margin-top: 20px;
width: 80vw;

@media (min-width: 768px) {
    width:50vw !important;
}
`

export const QuestionTitle = sytyled.div`
position: relative;
width: 100%;
h4{
   
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    padding: 20px 47px;  
    margin: 0;
    
}

@media (max-width: 768px) { 
    h4{font-size: 1em;
    
    }
}

  
`

export const QuestionText = sytyled.div`
width: 100%;
padding: 20px;
`
export const Button = sytyled.button`
position: absolute;
right: 0;
top: 0;
`
