class EmployeePayrollData{
    get id(){
        return this.id;
    }
    set id(id){
        this.id =id;
    }
    get name(){
        return this.name;
    }
    set name(name){
        let nameRegex = regExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
        this.name =name;
        else throw 'Name is Incorrect!';
    }
    get profilePic(){
        return this.profilePic;
    }
    set profilePic(profilePic){
        this.profilePic=profilePic;
    }
    get gender(){
        return this.gender;
    }
    set gender(gender){
        this.gender =gender;
    }
    get department(){
        return this.department;
    }
    set department(department){
        this.department =department;
    }
    get salary(){
        return this.salary;
    }
    set salary(salary){
        this.salary =salary;
    }
    get note(){
        return this.note;
    }
    set note(note){
        this.note =note;
    }
    get startDate(){
        return this.startDate;
    }
    set startDate(startDate){
        this.startDate =startDate;
    }

    toString(){
        const option ={year:'numeric',month:'long',day:'numeric'};
        const empDate =!this.startDate ? "undefined" : 
                this.startDate.toLocalDateString("en-US",option);
        return "id="+this.id+", name='"+this.name +",gender='"+this.gender+",department="+this.department+
        ",salary="+this.salary+ ",startDate="+empDate+",note="+this.note+",profilePic='"+this.profilePic;
    }
    window.addEventListener('DOMContentLoaded',(event)=>{
        const name=document.querySelector('#name');
        const textError =document.querySelector('.text-error');
        name.addEventListener('input',function(){
            if(name.ariaValueMax.length==0){
                textError.textContent="";
                return;
            }
            try{
                (new EmployeePayrollData()).name=name.value;;
                textError.textContent="";
            }catch(e){
                textError.textContent=e;
            }
        });
    });
}