const Card = (props) => {
    return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.img}/>
      <div style={{display: 'inline-block',
                             marginLeft: 10}}>      
        <div style={{fontSize: '1.25em', 
                                 fontWeight: 'bold'}}>
            {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
    );
};

let data= [
    {   name: 'Michael Boker',
    img: 'https://avatars3.githubusercontent.com/u/506018?v=3',
    company: 'Sogeti'},
  { name: 'Ahmad Farag',
    img: 'https://avatars2.githubusercontent.com/u/12652412?v=3',
    company: 'Cardinal'}
]

const CardList = (props) => {
    return (
    <div>
<!--       {props.cards.map(card => <Card 
                            name={card.name}
                            img={card.img}
                            company={card.company}/>)} -->
      {props.cards.map(card => <Card {...card}/>)}                     
    </div>
  )
}

ReactDOM.render(<CardList cards={data} />, mountNode);