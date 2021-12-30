import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    label{
        text-align:center;
    }
    h2:nth-child(1){
        margin-right:10px;
        color:var(--darkGrey);
    }
    h2:nth-child(3){
        margin-left:10px;
        color:blue;
    }
    .switch{
        position:relative;
        display:inline-block;
        width:100px;
        height:50px;
    }
    .switch input{
        opacity:0;
        width: 0;
        height: 0;
    }
    .slider{
        position: absolute;
        cursor:pointer;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-color:var(--darkGrey);
        -webkit-transition: .4s;
        transition: .4s;
    }
    .slider:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: 4px;
  bottom: 10px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(45px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`