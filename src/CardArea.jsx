function CardArea({children}){


    let cardArea = {
    display: 'center',
    justifyContent: 'flex-end' ,
  }
    return (
        <div
            className="batata" 
            style={cardArea}>
            {children}
        </div>
        
    )
}
export default  CardArea