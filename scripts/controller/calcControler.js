class CalcController{
/* Se for usar um recurso mais de uma vez, transforma-lo em método
 */
    constructor(){

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

    initButtonsEvents(){

        let buttons = document.querySelectorAll('#buttons > g, #parts >g')

        buttons.forEach(btn=>{

            btn.addEventListener('click', e=>{
                
                console.log(e)
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