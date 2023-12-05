import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function Main() {
    function showDetails(){
        alert('heellooo');
    }
    const deatils=[{name:"Ramishka ", age:23,mobile:728762846923},
    {name:"Ranu ", age:73,mobile:728762846923},
    {name:"maniska ", age:13,mobile:728762846923},
    {name:"Renu ", age:46,mobile:728762846923},
    {name:"Nabha ", age:27,mobile:728762846923},
    {name:"Puuuuuuu ", age:53,mobile:728762846923},]
    const person={name:"tritesh", age:23};
    const names=["umesh","Preeii","kavuuu"]

    function printName(name){
        alert("Name :" + name);
    }

    function additionnn(num1,num2){
        return num1+ num2
    }
    return (
        <div className='p-5 '>
            <Header person={person} showDetails={showDetails} names={names} />

            <Content deatils={deatils} printName={printName} additionnn={additionnn}/>
            <Footer />
        </div>
    )
}

export default Main