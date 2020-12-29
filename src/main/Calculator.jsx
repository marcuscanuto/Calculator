import React, {Component} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'


const initialState = {
    DisplayValue: '0',
    clearDisplay: false,
    operation:null,
    values:[0,0],
    current:0
}

 export default class Calculator extends Component {

    state = {...initialState}

    ClearMemory(){
        this.setState({...initialState})
    }

    setOperation(operation){
        // console.log(operation)
        if(this.state.current === 0){
            this.setState({operation,current:1,clearDisplay:true})
        }else{
             const equals = operation === '='
             const currentOperation = this.state.operation
             
             const values = [...this.state.values]
               try{
                 values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                
                 }catch(e){
                     values[0] = this.state.values[0]
                 }
             values[1] = 0

             this.setState({
                 DisplayValue: values[0],
                 operation: equals ? null : operation,
                 current: equals ? 0 : 1,
                 clearDisplay: !equals,
                 values
             })
        }
    }

    AddDigit(n){
        if(n === '.' && this.state.DisplayValue.includes('.')){
            return 
        }
        const clearDisplay = this.state.DisplayValue === '0'
         || this.state.clearDisplay 
         const currentValue =  clearDisplay ? '' : this.state.DisplayValue
         const DisplayValue = currentValue + n
         this.setState({DisplayValue,clearDisplay:false})

         if( n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(DisplayValue)
            const values = [...this.state.values]
            values[i]= newValue
            this.setState({values})
            console.log(values)
         }
    }

    render(){
        // esse this representa o obj atual dentro do render.
        const AddDigit = n => this.AddDigit(n)
        const setOperation = op => this.setOperation(op)
        return (
            <div className="calculator">
                <Display value ={this.state.DisplayValue}/>
                <Button label="AC" click= {() => this.ClearMemory()} triple/>
                <Button label="/" click ={setOperation} operation/>
                <Button label="7" click = {AddDigit} />
                <Button label="8" click ={AddDigit}/>
                <Button label="9" click ={AddDigit}/>
                <Button label="*" click ={setOperation} operation/>
                <Button label="4" click ={AddDigit}/>
                <Button label="5" click ={AddDigit}/>
                <Button label="6"click ={AddDigit}/>
                <Button label="-" click ={setOperation} operation/>
                <Button label="1"click ={AddDigit}/>
                <Button label="2"click ={AddDigit}/>
                <Button label="3"click ={AddDigit}/>
                <Button label="+"click ={setOperation} operation/>
                <Button label="0"click ={AddDigit} double/>
                <Button label="."click ={AddDigit}/>
                <Button label="="click ={setOperation} operation/>
                
                
            </div>
        )
    }
 }

