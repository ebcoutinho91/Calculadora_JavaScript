class CalcController{
/* Se for usar um recurso mais de uma vez, transforma-lo em método
*/
    constructor(){
        this._operation = []
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector('#display')
        this._dateEl = document.querySelector('#data')
        this._timeEl = document.querySelector('#hora')
        this._currentDate
        this.initialize()
        this.initButtonsEvents()
    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{

            this.setDisplayDateTime()

        }, 1000)
    }

    clearAll(){

        this._operation = []

    }

    clearEntry(){

        this._operation.pop()

    }

    addOperation(value){
        this._operation.push(value)
        console.log(this._operation)
    }

    setError(){
        this.displayCalc = 'Error'
    }

    execBtn(value){
        switch (value) {
            case 'ac':
                this.clearAll()
                break;
            case 'ce':
                this.clearEntry()
                break;
            case 'soma':
                this.soma()
                break;
            case 'subtracao':
                this.subtracao
                break;
            case 'divisao':
                this.divisao()
                break;
            case 'multiplicacao':
                this.multiplicacao()
                break;
            case 'porcento':
                this.porcento()
                break;
            case 'igual':
                this.igual()
                break; 
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))
                break;
            default:
                this.setError()
                break;
        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll('#buttons > g, #parts >g')

        buttons.forEach((btn, index)=>{

            btn.addEventListener('click', e=>{

            let txtBtn = (btn.className.baseVal.replace('btn-', ''))

            this.execBtn(txtBtn)


            })
        })
    }

    /* Getters */

    get displayTime(){

        return this._timeEl.innerHTML
    }

    get displayDate(){

        return this._dateEl.innerHTML    
    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML
    }

    get currentDate(){

        return new Date()
    }

    /* Setters */

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day: '2-digit', month: 'long', year: 'numeric'})
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
        
    }

    set displayTime(value){

        this._timeEl.innerHTML = value
    }

    set displayDate(value){
        this._dateEl.innerHTML = value
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value
    }

    set currentDate(valaue){

        this._currentDate.innerHTML = value
    }

}