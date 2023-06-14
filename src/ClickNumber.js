export default function ClickNumber({className, clickNumber, number}){
    return(
    <div className={className} onClick={() => clickNumber(number)}>{number}</div>
    )
}